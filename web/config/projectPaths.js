/**
 * Provides a single, consistent place for js files to get
 * relevant paths, globs, etc pertaining to the project structure.
 */

// node imports
var path = require('path')


// directories
var rootDir = path.join(__dirname, '..')
var configDir = path.join(rootDir, 'config')
var buildDir = path.join(rootDir, 'build')
var sourceDir = path.join(rootDir, 'src')
var assetsDir = path.join(sourceDir, 'assets')
var templatesDir = path.join(sourceDir, 'templates')
var webpackDir = path.join(configDir, 'webpack')
// entry points
var clientEntry = path.join(sourceDir, 'client.js')
var serverEntry = path.join(sourceDir, 'index.js')
// built files
var clientBuild = path.join(buildDir, path.basename(clientEntry))
var serverBuild = path.join(buildDir, path.basename(serverEntry))
var cssBuild = path.join(buildDir, 'styles.css')


module.exports = {
    // directories
    rootDir: rootDir,
    sourceDir: sourceDir,
    buildDir: buildDir,
    templatesDir: templatesDir,
    assetsDir: assetsDir,
    // entry points
    clientEntry: clientEntry,
    serverEntry: serverEntry,
    // built files
    clientBuild: clientBuild,
    serverBuild: serverBuild,
    cssBuild: cssBuild,
    // globs
    clientBuildGlob: clientBuild + '*',
    serverBuildGlob: serverBuild + '*',
    cssBuildGlob: cssBuild + '*',
    buildGlob: path.join(buildDir, '*'),
    cssGlob: path.join(assetsDir, 'styles', 'css', '*'),
    testsGlob: path.join(sourceDir, '**', '_tests', 'test_*.js'),
    // configuration files
    eslintConfig: path.join(configDir, 'eslint.json'),
    karmaConfig: path.join(configDir, 'karma.js'),
    babelConfig: path.join(configDir, 'babel.js'),
    webpackBaseConfig: path.join(webpackDir, 'base.js'),
    webpackClientConfig: path.join(webpackDir, 'client.js'),
    webpackServerConfig: path.join(webpackDir, 'server.js'),
    // favicon
    favicon: path.join(assetsDir, 'images', 'favicon.png')
}
