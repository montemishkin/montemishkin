// third party imports
import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {RoutingContext, match} from 'react-router'
import {Provider} from 'react-redux'
// local imports
import {templatesDir} from 'config/projectPaths'
import routes from './routes'
import {createStore} from './store'
import posts from 'apps/blog/data'
import projects from 'apps/projects/data'
import tags from 'apps/core/tags/data'
import IncludeNav from 'views/IncludeNav'
import IncludeFooter from 'views/IncludeFooter'
import NotFound from 'views/NotFound'


// create the express app
const app = express()


// use jade as the templating engine
app.set('view engine', 'jade')
app.set('views', templatesDir)


// any url that hits this app
app.all('*', (req, res) => {
    // figure out the appropriate route
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        // if there was an error
        if (error) {
            res.status(500).send(error.message)
        // if route was found but is redirect
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        // if route was found and is not a redirect
        } else {
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
