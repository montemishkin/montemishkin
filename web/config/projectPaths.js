/**
 * Provides a single, consistent place for js files to get
 * relevant paths, globs, etc pertaining to the project structure.
 */

// node imports
var path = require('path')


var rootDir = path.join(__dirname, '..')
var configDir = path.join(rootDir, 'config')
var buildDir = path.join(rootDir, 'build')
var sourceDir = path.join(rootDir, 'src')
var assetsDir = path.join(sourceDir, 'assets')
var templatesDir = path.join(sourceDir, 'templates')
var webpackDir = path.join(configDir, 'webpack')
var clientEntry = path.join(sourceDir, 'client.js')
var serverEntry = path.join(sourceDir, 'index.js')
var testsEntry = path.join(rootDir, 'scripts', 'test.js')
var clientBuild = path.join(buildDir, path.basename(clientEntry))
var serverBuild = path.join(buildDir, path.basename(serverEntry))
var testsBuild = path.join(buildDir, path.basename(testsEntry))


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
    testsEntry: testsEntry,
    // built files
    clientBuild: clientBuild,
    serverBuild: serverBuild,
    testsBuild: testsBuild,
    // globs
    clientBuildGlob: path.join(clientBuild, '*'),
    serverBuildGlob: path.join(serverBuild, '*'),
    testsBuildGlob: path.join(testsBuild, '*'),
    cssGlob: path.join(assetsDir, 'styles', 'css', '*'),
    // configuration files
    eslintConfig: path.join(configDir, 'eslint.json'),
    webpackBaseConfig: path.join(webpackDir, 'base.js'),
    webpackClientConfig: path.join(webpackDir, 'client.js'),
    webpackServerConfig: path.join(webpackDir, 'server.js'),
    webpackTestsConfig: path.join(webpackDir, 'tests.js'),
    // favicon
    favicon: path.join(assetsDir, 'images', 'favicon.png')
}
