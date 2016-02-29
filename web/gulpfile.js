// third party imports
var gulp = require('gulp')
var del = require('del')
var karma = require('karma')
var webpack = require('webpack-stream')
var named = require('vinyl-named')
var minifyCSS = require('gulp-minify-css')
var concat = require('gulp-concat')
var nodemon = require('gulp-nodemon')
var autoprefixer = require('autoprefixer')
var postcss = require('gulp-postcss')
// local imports
var projectPaths = require('./config/projectPaths')
var buildDir = projectPaths.buildDir
var serverBuild = projectPaths.serverBuild
var clientBuildGlob = projectPaths.clientBuildGlob
var serverBuildGlob = projectPaths.serverBuildGlob
var clientEntry = projectPaths.clientEntry
var serverEntry = projectPaths.serverEntry
var cssGlob = projectPaths.cssGlob
var webpackClientConfigPath = projectPaths.webpackClientConfig
var webpackServerConfigPath = projectPaths.webpackServerConfig
var karmaConfigPath = projectPaths.karmaConfig


/**
 * Default to watching client and server, and runing server.
 */
gulp.task('default', [
    'watch-client',
    'watch-server',
    'watch-styles',
    'runserver',
])


/**
 * Run the development server.
 */
gulp.task('runserver', function () {
    nodemon({
        script: serverBuild,
        watch: serverBuild,
        args: ['8000'],
    })
})


/**
 * Watch client entry point.
 */
gulp.task('watch-client', ['clean-client'], function () {
    var config = require(webpackClientConfigPath)
    config.watch = true

    return gulp.src(clientEntry)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(buildDir))
})


/**
 * Watch server entry point.
 */
gulp.task('watch-server', ['clean-server'], function () {
    var config = require(webpackServerConfigPath)
    config.watch = true

    return gulp.src(serverEntry)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(buildDir))
})


/**
 * Watch styles only. Rebuild on change.
 */
gulp.task('watch-styles', ['build-styles'], function () {
    gulp.watch(cssGlob, ['build-styles'])
})


/**
 * Build styles only.
 */
gulp.task('build-styles', function () {
    return gulp.src(cssGlob)
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 2 versions'],
            }),
        ]))
        .pipe(concat('styles.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(buildDir))
})


/**
 * Run test suite once.
 */
gulp.task('test', function (cb) {
    var server = new karma.Server({
        configFile: karmaConfigPath,
        singleRun: true
    }, function () { cb() })

    server.start()
})


/**
 * Watch tests for changes, run tests on change.
 */
gulp.task('tdd', function () {
    var server = new karma.Server({
        configFile: karmaConfigPath,
    })

    server.start()
})


/**
 * Build everything needed for production.
 */
gulp.task('build-production', [
    'clean-build',
    'build-styles',
    'build-client-production',
    'build-server-production',
])


/**
 * Build client entry point for production.
 */
gulp.task('build-client-production', ['clean-client'], function () {
    process.env.NODE_ENV = 'production'

    var config = require(webpackClientConfigPath)

    // build client
    return gulp.src(clientEntry)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(buildDir))
})


/**
 * Build server entry point for production.
 */
gulp.task('build-server-production', ['clean-server'], function () {
    process.env.NODE_ENV = 'production'

    var config = require(webpackServerConfigPath)

    // build server
    return gulp.src(serverEntry)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(buildDir))
})


/**
 * Remove all ouptut files from previous client builds.
 */
gulp.task('clean-client', function () {
    del.sync(clientBuildGlob)
})


/**
 * Remove all ouptut files from previous server builds.
 */
gulp.task('clean-server', function () {
    del.sync(serverBuildGlob)
})


/**
 * Remove ALL previously built files.
 */
gulp.task('clean-build', function () {
    del.sync(buildDir)
})
