/**
 * Provides a single, consistent place for js files to get
 * relevant paths, globs, etc pertaining to the project structure.
 */

// node imports
var path = require('path')


// project root directory
var rootDir = path.join(__dirname, '..')
// assets directory
var assetsDir = path.join(rootDir, 'assets')
// configuration directory
var configDir = path.join(rootDir, 'config')
// source directory
var sourceDir = path.join(rootDir, 'src')
// build directory
var buildDir = path.join(rootDir, 'build')
// apps directory
var appsDir = path.join(sourceDir, 'apps')
// entry points directory
var entriesDir = path.join(sourceDir, 'entries')
// client directory
var clientDir = path.join(appsDir, 'client')
// templates directory
var templatesDir = path.join(clientDir, 'templates')
// styles directory
var stylesDir = path.join(clientDir, 'styles')
// webpack configuration directory
var webpackDir = path.join(configDir, 'webpack')


// export the project paths|globs object
module.exports = {
    // directories
    rootDir: rootDir,
    sourceDir: sourceDir,
    appsDir: appsDir,
    buildDir: buildDir,
    assetsDir: assetsDir,
    stylesDir: stylesDir,
    clientDir: clientDir,
    templatesDir: templatesDir,
    // entry points
    clientEntry: path.join(entriesDir, 'client.js'),
    serverEntry: path.join(entriesDir, 'server.js'),
    // built files
    clientBuild: path.join(buildDir, 'client.js'),
    serverBuild: path.join(buildDir, 'server.js'),
    // globs
    clientBuildGlob: path.join(buildDir, 'client', '*'),
    serverBuildGlob: path.join(buildDir, 'server', '*'),
    cssGlob: path.join(assetsDir, 'styles', '*.css'),
    // configuration files
    eslintConfig: path.join(configDir, 'eslint.json'),
    karmaConfig: path.join(configDir, 'karma.js'),
    webpackBaseConfig: path.join(webpackDir, 'base.js'),
    webpackClientConfig: path.join(webpackDir, 'client.js'),
    webpackServerConfig: path.join(webpackDir, 'server.js'),
    // favicon
    favicon: path.join(assetsDir, 'images', 'favicon.ico')
}


// end of file
