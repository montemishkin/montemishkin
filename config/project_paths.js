/**
 * Provides a single, consistent place for js files to get
 * relevant paths, globs, etc pertaining to the project structure.
 */

// node imports
var path = require('path')


// project root directory
var rute = path.join(__dirname, '..')
// assets directory
var assets_dir = path.join(rute, 'montemishkin', 'assets')
// scripts directory
var scripts_dir = path.join(assets_dir, 'scripts')
// build directory
var build_dir = path.join(assets_dir, 'build')
// configuration directory
var config_dir = path.join(rute, 'config')


// export the project paths|globs object
module.exports = {
    // directories
    root_dir: rute,
    assets_dir: assets_dir,
    scripts_dir: scripts_dir,
    build_dir: build_dir,
    // entry points
    entry: path.join(scripts_dir, 'entries', 'index.js'),
    // configuration files
    eslint_config: path.join(config_dir, 'eslint.json'),
    karma_config: path.join(config_dir, 'karma.js'),
    webpack_config: path.join(config_dir, 'webpack.js'),
}


// end of file
