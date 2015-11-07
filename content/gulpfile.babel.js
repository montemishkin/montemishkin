// third party imports
import gulp from 'gulp'
import del from 'del'
import webpack from 'webpack-stream'
import named from 'vinyl-named'
import shell from 'gulp-shell'
// local imports
import {
    buildDir,
    build,
    entry,
    webpackConfig as webpackConfigPath,
} from './config/projectPaths'
const webpackConfig = require(webpackConfigPath)


/**
 * Default to watching source and runing server
 */
gulp.task('default', ['watch', 'run'])


/**
 * Run the built file.
 */
gulp.task('run', shell.task(`nodemon ${build} 8001`))


/**
 * Build entry point.
 */
gulp.task('build', ['clean'], () => {
    return gulp.src(entry)
        .pipe(named())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(buildDir))
})


/**
 * Watch entry point.
 */
gulp.task('watch', () => {
    const config = {
        ...webpackConfig,
        watch: true,
    }

    return gulp.src(entry)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(buildDir))
})


/**
 * Delete previous build.
 */
gulp.task('clean', () => {
    del.sync(buildDir)
})
