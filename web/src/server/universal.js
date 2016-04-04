// third party imports
import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StyleSheetServer} from 'aphrodite'
import {match} from 'react-router'
import Helmet from 'react-helmet'
// local imports
import App from './App'
import renderTemplate from './templates/index'
import {createStore} from 'store'
import routes from 'routes'
import NotFound from 'routes/NotFound'
import fetchInitialData from 'server/fetchInitialData'
import willBeRendered from 'server/willBeRendered'


const universalServer = express()


// route all requests through react-router routes
universalServer.all('*', (req, res) => {
    const location = req.url

    // figure out appropriate route
    match({routes, location}, async function (error, redirectLocation, renderProps) {
        // if there was an error
        if (error) {
            res.status(500).send(error.message)
        // if route was found but is redirect
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        // if route was found and is not a redirect
        } else {
            // if `NotFound` is to be rendered
            if (willBeRendered(NotFound, renderProps)) {
                // add 404 status (but still render pretty routed application)
                res.status(404)
            }

            const store = createStore()

            await fetchInitialData(store.dispatch, renderProps)

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
                initialState: JSON.stringify(store.getState()),
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
