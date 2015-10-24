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
        } else if (renderProps) {
            const store = createStore({
                posts,
                projects,
                tags,
            })
            // console.log('state', store.getState())
            // initial application state
            const initialState = JSON.stringify(store.getState())
            // initial component to render
            const initialComponent = (
                <Provider store={store}>
                    <RoutingContext {...renderProps} />
                </Provider>
            )

            // render the jade template with the component mounted
            res.render('index.jade', {
                initialState,
                renderedComponent: renderToString(initialComponent),
            })
        // otherwise route was not found
        } else {
            res.status(404).send('Not found')
        }
    })
})


export default app
