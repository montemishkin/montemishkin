/*
 * Defines common tasks used in development.
 *
 * In the case where it might be unclear whether a task name refers to
 * a frontend or backend task, the task name is prefixed with either
 * "f-" or "b-" (which stand for "frontend" and "backend").
 */

/* common gulp imports */
var gulp = require('gulp')
var del = require('del')
var webpack = require('webpack-stream')
var named = require('vinyl-named')
// var gulp_ssh = require('gulp-ssh')
var install = require('gulp-install')
var shell = require('gulp-shell')
var karma = require('karma').server
/* misc third party imports */
var assign = require('lodash/object/assign')
/* local imports */
var project_paths = require('./config/project_paths')


// /* remote host configuration */
//
// var ssh_host = gulp_ssh({
//     host: '',
//     username: ''
// })


/* tasks */

/**
 * Remove all ouptut files from previous frontend builds.
 */
gulp.task('clean_previous_build', function(cb) {
    del(project_paths.build_dir, cb)
})


/**
 * Build frontend entry points with webpack (for development).
 */
gulp.task('build', ['clean_previous_build'], function() {
    var config = assign(
        {},
        require(project_paths.webpack_dev_config),
        {devtool: 'source-map'}
    )

    return gulp.src(project_paths.entries_glob)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Watch source for changes, (development) build on change.
 */
gulp.task('watch', ['clean_previous_build'], function() {
    var config = assign(
        {},
        require(project_paths.webpack_dev_config),
        {watch: true}
    )

    gulp.src(project_paths.entries_glob)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Build frontend entry points for production.
 */
gulp.task('production-build', ['clean_previous_build'], function() {
    var config = require(project_paths.webpack_live_config)

    return gulp.src(project_paths.entries_glob)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(project_paths.build_dir))
})


/**
 * Run the frontend test suite once.
 */
gulp.task('test-frontend', function(cb) {
    karma.start({
        configFile: project_paths.karma_config,
        singleRun: true
    }, cb)
})


/**
 * Watch frontend source and tests for changes, run tests on change.
 */
gulp.task('tdd-frontend', function(cb) {
    karma.start({
        configFile: project_paths.karma_config
    }, cb)
})


/**
 * Activate the project's python virtual environment.
 */
gulp.task('workon', shell.task([
    // 'workon monte_mishkin_com'
    // // ^ doesnt work because workon is an alias...
    // 'source $HOME/.virtualenvs/monte_mishkin_com/bin/activate'
    // // ^ wont work because dependent shell tasks start a new shell instance
    'python -c "import django"'
    // ^ best hack i could think of for now, to ensure you are
    //   in your virtualenv before running python commands
]))


/**
 * Migrate the database.
 */
gulp.task('migrate', ['workon'], shell.task([
    './manage.py makemigrations',
    './manage.py migrate'
]))


/**
 * Run the development server.
 */
gulp.task('serve', ['workon'], shell.task([
    './manage.py runserver'
]))


/**
 * Install/update local (python and node) dependencies.
 */
gulp.task('update_dependencies', ['workon'], function() {
    return gulp.src('./package.json')
               .pipe(install())
               .pipe(shell(['pip install -r requirements.pip']))
})



// // create the local database
// gulp.task('create_db', shell.task('./manage.py syncdb'))
//
//
// // deploy the codebase to live server (make sure to push first)
// gulp.task('deploy', ['push'], function() {
//     // execute the following commands on remote server
//     return ssh_host.shell([
//         // navigate into directory with repository
//         'cd repository',
//         // pull latest version of codebase
//         'gulp pull',
//         // update "local" project
//         'gulp update_project',
//         // restart application server
//         'sudo service gunicorn restart',
//     ])
// })
//
//
// // initialize the project locally
// gulp.task('init', ['create_db', 'update_project'])
//
//
// // pull repository from remote server
// gulp.task('pull', shell.task('git pull'))
//
//
// // push repository to remote server (pull first)
// gulp.task('push', ['pull'], shell.task('git push'))
//
//
// // pull repository from remote server
// gulp.task('server', shell.task('./manage.py runserver_plus'))
//
//
// // execute necessary commands to initialize  project locally
// gulp.task('update_project', ['update_dependencies'], shell.task([
//     // update database
//     './manage.py migrate',
//     // collect static files
//     './manage.py collectstatic',
// ]))


// end of file
