// third party imports
var assign = require('lodash/object/assign')
// local imports
var projectPaths = require('../projectPaths')
var baseConfig = require(projectPaths.webpackBaseConfig)


module.exports = assign({}, baseConfig, {
    node: {
        // needed since tape tries to access fs module
        fs: 'empty',
    },
})
