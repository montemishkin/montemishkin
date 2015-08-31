/*
 * Base frontend build configuration common to both live and development builds.
 *   references:
 *     * http://webpack.github.io/docs/
 *     * https://github.com/petehunt/webpack-howto
 */

/* local imports */
var project_paths = require('./project_paths')


// export the configuration
module.exports = {
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: project_paths.assets_dir,
            },
        ],
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            // inline base64 DataURLs for <=8k images, direct URLs for the rest
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url',
                query: {limit: 8000},
            }, {
                test: /\.js$/,
                loader: 'babel',
                query: require(project_paths.babel_config),
                include: project_paths.assets_dir,
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.css'],
    },
    eslint: {
        configFile: project_paths.eslint_config,
        failOnError: true,
    },
}


// end of file
