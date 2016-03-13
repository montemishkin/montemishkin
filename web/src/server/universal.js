// third party imports
import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StyleSheetServer} from 'aphrodite'
import {match} from 'react-router'
import Helmet from 'react-helmet'
// local imports
import App from './App'
import {createStore} from 'store'
import routes from 'routes'
import NotFound from 'routes/NotFound'
import renderTemplate from 'templates/index'


const universalServer = express()


// route all requests through react-router routes
universalServer.all('*', (req, res) => {
    const location = req.url

    // figure out the appropriate route
    match({routes, location}, (error, redirectLocation, renderProps) => {
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

            // TODO: this should really be grabbed AFTER rendering markup
            // (so that rendering might alter store).  However, with current
            // (poor) implementation this will set `isLoading` to true on
            // things like `state.posts` so the client will be waiting on
            // a response to a request it didnt make (the server made it)
            const initialState = JSON.stringify(store.getState())

            const {
                html: renderedComponent,
                css,
            } = StyleSheetServer.renderStatic(() => renderToString(
                <App
                    store={store}
                    renderProps={renderProps}
                    radiumConfig={{
                        userAgent: req.headers['user-agent'],
                    }}
                />
            ))

            // see: https://github.com/nfl/react-helmet#server-usage
            const helmet = Helmet.rewind()

            const html = renderTemplate({
                initialState,
                renderedComponent,
                title: helmet.title,
                css: css.content,
                renderedClassNames: JSON.stringify(css.renderedClassNames),
            })

            res.send(html)
        }
    })
})


export default universalServer
