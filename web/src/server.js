// third party imports
import express from 'express'
import compression from 'compression'
import logger from 'morgan'
import favicon from 'serve-favicon'
import serveStatic from 'serve-static'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match} from 'react-router'
import Helmet from 'react-helmet'
// local imports
import projectPaths from 'config/projectPaths'
const {
    buildDir,
    assetsDir,
    favicon: faviconPath,
    templatesDir,
} = projectPaths
import {createStore} from 'store'
import routes from 'routes'
import NotFound from 'routes/NotFound'
import App from 'App'


const server = express()


/* Application-wide Settings */

// use jade for html templating
server.set('view engine', 'jade')
// set directory in which to search for html templates
server.set('views', templatesDir)


/* Application-wide Middleware */

// log requests
server.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
// serve favicon
server.use(favicon(faviconPath))
// compress responses
server.use(compression())


/* Routing */

// route static files to build and assets dirs
server.use('/static', serveStatic(buildDir), serveStatic(assetsDir))
// route all surviving requests through the react-router routes
server.all('*', async function (req, res) {
    // figure out the appropriate route
    match({routes, location: req.url}, async function (error, redirectLocation, renderProps) {
        // if there was an error
        if (error) {
            res.status(500).send(error.message)
        // if route was found but is redirect
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        // if route was found and is not a redirect
        } else {
            // if `NotFound` route is to be rendered
            if (renderProps.components.indexOf(NotFound) !== -1) {
                // add 404 status (but still render pretty routed application)
                res.status(404)
            }

            // TODO: grab initial data based on route

            // create redux store
            const store = createStore()

            // initial application state
            const initialState = JSON.stringify(store.getState())
            // rendered app
            const renderedComponent = renderToString(
                <App
                    store={store}
                    renderProps={renderProps}
                    radiumConfig={{
                        userAgent: req.headers['user-agent'],
                    }}
                />
            )

            // see: https://github.com/nfl/react-helmet#server-usage
            Helmet.rewind()

            // render jade template with component mounted
            res.render('index.jade', {
                initialState,
                renderedComponent,
            })
        }
    })
})


export default server
