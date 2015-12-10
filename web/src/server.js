// third party imports
import express from 'express'
import compression from 'compression'
import logger from 'morgan'
import favicon from 'serve-favicon'
import serveStatic from 'serve-static'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match} from 'react-router'
import fetch from 'isomorphic-fetch'
import Helmet from 'react-helmet'
import {normalize, Schema, arrayOf} from 'normalizr'
import reduce from 'lodash/collection/reduce'
// local imports
import {
    buildDir,
    assetsDir,
    favicon as faviconPath,
    templatesDir,
} from 'config/projectPaths'
import routes from 'routes'
import {createStore} from 'store'
import App from './App'


const server = express()
// graphql query to retrieve initial store state
const query = `
    query {
        posts {
          ...articleFragment
        }
        projects {
          ...articleFragment
        }
    }

    fragment articleFragment on Article {
        id
        url
        title
        subtitle
        content
        bannerImage {
            url
        }
        created {
            year
            month
            day
        }
        tags {
            id
            url
            name
            description
        }
    }
`
// URL to post to when requesting initial data
// TODO: this url should not be hardcoded here
const postURL = `http://localhost:8001/query/?query=${query}`
// TODO: clean up this schema definition
const tagSchema = new Schema('tags')
const postSchema = new Schema('posts')
postSchema.define({
    tags: arrayOf(tagSchema),
})
const projectSchema = new Schema('projects')
projectSchema.define({
    tags: arrayOf(tagSchema),
})
const normalizrSchema = {
    projects: arrayOf(projectSchema),
    posts: arrayOf(postSchema),
}


/* Application-wide Settings */

// use jade for html templating
server.set('view engine', 'jade')
// set directory in which to search for html templates
server.set('views', templatesDir)


/* Application-wide Middleware */

// log requests
server.use(logger('dev'))
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
            // grab initial data for store from admin service
            const {posts, projects, tags} = await fetch(postURL, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
            // parse response into json
            }).then(body => body.json())
            // check for graphql errors and then grab the response data
            .then(({data, errors: graphqlErrors}) => {
                if (graphqlErrors) {
                    // TODO: figure out what to actually do with this error
                    /* eslint-disable no-console */
                    console.log('error fetching initial data: ', graphqlErrors)
                    /* eslint-enable no-console */
                }
                return data
            // normalize nested data structure
            }).then(data => normalize(data, normalizrSchema).entities)
            // convert objects with integer keys to arrays
            .then(startData => reduce(startData, (endData, val, key) => ({
                ...endData,
                [key]: reduce(val, (list, entry) => list.concat(entry), []),
            }), {}))

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

            // render routed application
            renderedComponent = renderToString(
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
