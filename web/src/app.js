// third party imports
import express from 'express'
import compression from 'compression'
import logger from 'morgan'
import favicon from 'serve-favicon'
import serveStatic from 'serve-static'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {RoutingContext, match} from 'react-router'
import {Provider} from 'react-redux'
import fetch from 'isomorphic-fetch'
// local imports
import {
    buildDir,
    assetsDir,
    favicon as faviconPath,
    templatesDir,
} from 'config/projectPaths'
import routes from 'routes'
import {createStore} from 'store'
import IncludeNav from 'views/IncludeNav'
import IncludeFooter from 'views/IncludeFooter'
import NotFound from 'views/NotFound'


const app = express()


/* Application-wide Settings */

// use jade for html templating
app.set('view engine', 'jade')
// set directory in which to search for html templates
app.set('views', templatesDir)


/* Application-wide Middleware */

// log requests
app.use(logger('dev'))
// serve favicon
app.use(favicon(faviconPath))
// compress responses
app.use(compression())


/* Routing */

// route static files to build and assets dirs
app.use('/static', serveStatic(buildDir), serveStatic(assetsDir))
// route all surviving requests through the react-router routes
app.all('*', async function (req, res) {
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
            const posts = await fetch('http://localhost:8001/posts')
                .then(body => body.json())
            const projects = await fetch('http://localhost:8001/projects')
                .then(body => body.json())
            const tags = await fetch('http://localhost:8001/tags')
                .then(body => body.json())

            // create redux store with initial data
            const store = createStore({
                posts,
                projects,
                tags,
            })
            // initial application state
            const initialState = JSON.stringify(store.getState())
            // rendered app
            let renderedComponent

            // if route was found
            if (renderProps) {
                // render routed application
                renderedComponent = renderToString(
                    <Provider store={store}>
                        <RoutingContext {...renderProps} />
                    </Provider>
                )
            // otherwise route was not found
            } else {
                // set response status to 404
                res.status(404)
                // render 404 page
                renderedComponent = renderToString(
                    <Provider store={store}>
                        <IncludeFooter>
                            <IncludeNav>
                                <NotFound />
                            </IncludeNav>
                        </IncludeFooter>
                    </Provider>
                )
            }

            // render jade template with component mounted
            res.render('index.jade', {
                initialState,
                renderedComponent,
            })
        }
    })
})


export default app
