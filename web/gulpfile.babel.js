// third party imports
import gulp from 'gulp'
import del from 'del'
import webpack from 'webpack-stream'
import named from 'vinyl-named'
import minifyCSS from 'gulp-minify-css'
import concat from 'gulp-concat'
import nodemon from 'gulp-nodemon'
import autoprefixer from 'autoprefixer'
import postcss from 'gulp-postcss'
// local imports
import {
    buildDir,
    serverBuild,
    testsBuild,
    clientBuildGlob,
    serverBuildGlob,
    testsBuildGlob,
    clientEntry,
    serverEntry,
    testsEntry,
    cssGlob,
    webpackClientConfig as webpackClientConfigPath,
    webpackServerConfig as webpackServerConfigPath,
    webpackTestsConfig as webpackTestsConfigPath,
    karmaConfig as karmaConfigPath,
} from './config/projectPaths'


/**
 * Default to watching client and server, and runing server.
 */
gulp.task('default', ['watch-client', 'watch-server', 'watch-styles', 'runserver'])


/**
 * Run the development server.
 */
gulp.task('runserver', () => {
    nodemon({
        script: serverBuild,
        watch: serverBuild,
        args: ['8000'],
    })
})


/**
 * Watch client entry point.
 */
gulp.task('watch-client', ['clean-client'], () => {
    const config = {
        ...require(webpackClientConfigPath),
        watch: true,
    }

    return gulp.src(clientEntry)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(buildDir))
})


/**
 * Watch server entry point.
 */
gulp.task('watch-server', ['clean-server'], () => {
    const config = {
        ...require(webpackServerConfigPath),
        watch: true,
    }

    return gulp.src(serverEntry)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(buildDir))
})


/**
 * Watch styles only. Rebuild on change.
 */
gulp.task('watch-styles', ['build-styles'], () => {
    gulp.watch(cssGlob, ['build-styles'])
})


/**
 * Build styles only.
 */
gulp.task('build-styles', () => {
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
 * Watch tests for changes. Run tests on change.
 */
gulp.task('test', ['watch-tests', 'run-tests-on-change'])


/**
 * Watch built test suite. Run tests on change.
 */
gulp.task('run-tests-on-change', () => {
    nodemon({
        script: testsBuild,
        watch: testsBuild,
    })
})


/**
 * Watch test suite.  Build on changes.
 */
gulp.task('watch-tests', ['clean-tests'], () => {
    const config = {
        ...require(webpackTestsConfigPath),
        watch: true,
    }

    return gulp.src(testsEntry)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(buildDir))
})


/**
 * Build everything needed for production.
 */
gulp.task('build-production', ['clean-build', 'build-styles', 'build-client-production', 'build-server-production'])


/**
 * Build client entry point for production.
 */
gulp.task('build-client-production', ['clean-client'], () => {
    process.env.NODE_ENV = 'production'

    // build client
    return gulp.src(clientEntry)
        .pipe(named())
        .pipe(webpack(require(webpackClientConfigPath)))
        .pipe(gulp.dest(buildDir))
})


/**
 * Build server entry point for production.
 */
gulp.task('build-server-production', ['clean-server'], () => {
    process.env.NODE_ENV = 'production'

    // build server
    return gulp.src(serverEntry)
        .pipe(named())
        .pipe(webpack(require(webpackServerConfigPath)))
        .pipe(gulp.dest(buildDir))
})


/**
 * Remove all ouptut files from previous client builds.
 */
gulp.task('clean-client', () => {
    del.sync(clientBuildGlob)
})


/**
 * Remove all ouptut files from previous server builds.
 */
gulp.task('clean-server', () => {
    del.sync(serverBuildGlob)
})


/**
 * Remove all ouptut files from previous tests builds.
 */
gulp.task('clean-tests', () => {
    del.sync(testsBuildGlob)
})


/**
 * Remove ALL previously built files.
 */
gulp.task('clean-build', () => {
    del.sync(buildDir)
})
