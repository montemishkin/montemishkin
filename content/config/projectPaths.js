/**
 * Provides a single, consistent place for js files to get
 * relevant paths, globs, etc pertaining to the project structure.
 */

// node imports
var path = require('path')


var rootDir = path.join(__dirname, '..')
var configDir = path.join(rootDir, 'config')
var sourceDir = path.join(rootDir, 'src')
var buildDir = path.join(rootDir, 'build')
var entry = path.join(sourceDir, 'index.js')


module.exports = {
    // directories
    rootDir: rootDir,
    sourceDir: sourceDir,
    buildDir: buildDir,
    // entry points
    entry: entry,
    // built file
    build: path.join(buildDir, path.basename(entry)),
    // configuration files
    eslintConfig: path.join(configDir, 'eslint.json'),
    webpackConfig: path.join(configDir, 'webpack.js'),
}
