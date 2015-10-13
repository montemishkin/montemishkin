// third party imports
import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {RoutingContext, match} from 'react-router'
import {Provider} from 'react-redux'
// local imports
import {templatesDir} from 'config/projectPaths'
import routes from './routes'
import store from './store'


// create the express app
const app = express()


// use jade as the templating engine
app.set('view engine', 'jade')
app.set('views', templatesDir)

// any url that hits this app
app.all('*', (req, res) => {
    // figure out the appropriate route
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.redirect(301, redirectLocation.pathname + redirectLocation.search)
        } else if (error) {
            res.status(500).send(error.message)
        } else if (renderProps === null) {
            res.status(404).send('Not found')
        // otherwise the component was found
        } else {
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
        }
    })
})


// export the application
export default app


// end of file
