// node imports
var path = require('path')
// third party imports
var assign = require('lodash/object/assign')
// local imports
var projectPaths = require('../projectPaths')
var baseConfig = require(projectPaths.webpackBaseConfig)


module.exports = assign({}, baseConfig, {
    entry: {
        client: projectPaths.clientEntry,
    },
    output: assign({}, baseConfig.output, {
        path: projectPaths.publicBuildDir,
        publicPath: projectPaths.publicStaticPath
            + '/'
            + path.relative(projectPaths.publicDir, projectPaths.publicBuildDir)
            + '/',
    }),
})
