// third party imports
var assign = require('lodash/object/assign')
// local imports
var projectPaths = require('../projectPaths')
var baseConfig = require(projectPaths.webpackBaseConfig)


module.exports = assign({}, baseConfig, {
    output: assign({}, baseConfig.output, {
        publicPath: projectPaths.publicStaticPath + '/',
    }),
    entry: {
        client: projectPaths.clientEntry,
    },
})
