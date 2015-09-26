/*
 * Provides a single, consistent place for js files to get
 * relevant paths, globs, etc pertaining to the project structure.
 */

/* node imports */
var path = require('path')


// project root directory
var rute = path.join(__dirname, '..')
// configuration directory
var config_dir = path.join(rute, 'config')
// assets directory
var assets_dir = path.join(rute, 'montemishkin', 'assets')
// scripts directory
var scripts_dir = path.join(assets_dir, 'scripts')


// export the project paths|globs object
module.exports = {
    root_dir: rute,
    assets_dir: assets_dir,
    build_dir: path.join(assets_dir, 'build'),
    entries_glob: path.join(scripts_dir, 'entries', '*.js'),
    unit_tests_glob: path.join(scripts_dir, 'components', '*', 'tests.js'),
    karma_config: path.join(config_dir, 'karma.config.js'),
    webpack_base_config: path.join(config_dir, 'webpack.base.config.js'),
    webpack_dev_config: path.join(config_dir, 'webpack.dev.config.js'),
    webpack_live_config: path.join(config_dir, 'webpack.live.config.js'),
    eslint_config: path.join(config_dir, 'eslintrc'),
    babel_config: path.join(config_dir, 'babel.config.js'),
}


// end of file
