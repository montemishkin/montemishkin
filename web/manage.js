#!/usr/bin/env node

// node imports
var process = require('process')
var fs = require('fs')
// third party imports
var del = require('del')
var karma = require('karma')
var webpack = require('webpack')
var glob = require('glob')
var postcss = require('postcss')
var cssnano = require('cssnano')
var nodemon = require('nodemon')
// local imports
var projectPaths = require('./config/projectPaths')


function webpackCallback(error, stats) {
    console.log(stats.toString({
        chunks: false,
        colors: true,
    }))

    // log errors below so that you see them
    if (error) {
        console.log('Webpack error: ', error)
    }
}


function setProductionEnvironment() {
    process.env.NODE_ENV = 'production'
}


var tasks = {}


/**
 * Default to watching client and server, and runing server.
 */
tasks['default'] = function () {
    runRequestedTaskNames(tasks, [
        'clean-build',
        'watch-styles',
        'watch-client',
        'watch-server',
        'run-server'
    ])
}


/**
 * Build everything needed for production.
 */
tasks['build-production'] = function () {
    runRequestedTaskNames(tasks, [
        'clean-build',
        'build-styles-production',
        'build-client-production',
        'build-server-production',
    ])
}


/**
 * Run the development server.
 */
tasks['run-server'] = function () {
    nodemon({
        script: projectPaths.serverBuild,
        watch: projectPaths.serverBuild,
        args: ['8000'],
    })
}


/**
 * Watch client entry point.
 */
tasks['watch-client'] = function () {
    var config = require(projectPaths.webpackClientConfig)
    config.watch = true

    webpack(config, webpackCallback)
}


/**
 * Watch server entry point.
 */
tasks['watch-server'] = function () {
    var config = require(projectPaths.webpackServerConfig)
    config.watch = true

    webpack(config, webpackCallback)
}


/**
 * Build styles only.
 */
tasks['build-styles'] = function () {
    var plugins = [
        cssnano({
            sourcemap: true,
            autoprefixer: {
                browsers: ['last 3 versions'],
            },
        }),
    ]

    var css = glob.sync(projectPaths.cssGlob).reduce(function (s, file) {
        return s + '\n' + fs.readFileSync(file)
    }, '')

    postcss(plugins)
        .process(css, {
            from: projectPaths.cssGlob,
            to: projectPaths.cssBuild,
            map: {inline: false},
        }).then(function (result) {
            fs.writeFileSync(projectPaths.cssBuild, result.css)

            if (result.map) {
                fs.writeFileSync(projectPaths.cssBuild + '.map', result.map)
            }
        })
}


/**
 * Watch styles only. Rebuild on change.
 */
tasks['watch-styles'] = function () {
    runRequestedTaskNames(tasks, ['build-styles'])

    function listener() {
        runRequestedTaskNames(tasks, ['build-styles'])
    }

    glob.sync(projectPaths.cssGlob).forEach(function (file) {
        fs.watchFile(file, listener)
    })
}


/**
 * Run test suite once.
 */
tasks['test'] = function () {
    var server = new karma.Server({
        configFile: projectPaths.karmaConfig,
        singleRun: true
    })

    server.start()
}



/**
 * Watch tests for changes, run tests on change.
 */
tasks['tdd'] = function () {
    var server = new karma.Server({
        configFile: projectPaths.karmaConfig,
    })

    server.start()
}


/**
 * Build client entry point for production.
 */
tasks['build-client-production'] = function () {
    runRequestedTaskNames(tasks, ['clean-client'])

    setProductionEnvironment()

    var config = require(projectPaths.webpackClientConfig)

    webpack(config, webpackCallback)
}


/**
 * Build server entry point for production.
 */
tasks['build-server-production'] = function () {
    runRequestedTaskNames(tasks, ['clean-server'])

    setProductionEnvironment()

    var config = require(projectPaths.webpackServerConfig)

    webpack(config, webpackCallback)
}


/**
 * Build styles for production.
 */
tasks['build-styles-production'] = function () {
    runRequestedTaskNames(tasks, ['clean-styles'])

    setProductionEnvironment()

    var plugins = [
        cssnano({
            autoprefixer: {
                browsers: ['last 3 versions'],
            },
        }),
    ]

    var css = glob.sync(projectPaths.cssGlob).reduce(function (s, file) {
        return s + '\n' + fs.readFileSync(file)
    }, '')

    postcss(plugins)
        .process(css, {
            from: projectPaths.cssGlob,
            to: projectPaths.cssBuild,
        }).then(function (result) {
            fs.writeFileSync(projectPaths.cssBuild, result.css)

            if (result.map) {
                fs.writeFileSync(projectPaths.cssBuild + '.map', result.map)
            }
        })
}


/**
 * Remove all ouptut files from previous client builds.
 */
tasks['clean-client'] = function () {
    del.sync(projectPaths.clientBuildGlob)
}


/**
 * Remove all ouptut files from previous server builds.
 */
tasks['clean-server'] = function () {
    del.sync(projectPaths.serverBuildGlob)
}


/**
 * Remove all ouptut files from previous styles builds.
 */
tasks['clean-styles'] = function () {
    del.sync(projectPaths.cssBuildGlob)
}


/**
 * Remove ALL previously built files.
 */
tasks['clean-build'] = function () {
    del.sync(projectPaths.buildGlob)
}




runRequestedTaskNames(tasks, process.argv.slice(2))


function runRequestedTaskNames(tasksObject, names) {
    console.log('Requested tasks: ', names.join(', '))

    if (names.length === 0) {
        names.push('default')
    }

    names.forEach(function (name) {
        var task = tasksObject[name]

        if (typeof task === 'undefined') {
            console.log('No such task: ', name)
            return
        }

        console.log('Running task: ', name)
        task()
        console.log('Completed task: ', name)
    })
}
