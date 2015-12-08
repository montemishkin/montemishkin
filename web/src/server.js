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
import flatten from 'lodash/array/flatten'
import uniq from 'lodash/array/uniq'
import padLeft from 'lodash/string/padLeft'
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
        created {
            year
            month
            day
        }
        slug
        title
        subtitle
        tags {
            id
            slug
            name
            description
        }
        content
        bannerImage {
            url
            width
            height
        }
    }
`
// URL to post to when requesting initial data
const postURL = `http://localhost:8001/query/?query=${query}`


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
            let {posts, projects} = await fetch(postURL, {
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
            })
            // convert initial data into form expected by frontend
            // TODO: obviously this is not the right way to do this
            // (just a temporary fix to get moved over to using graphql api)
            const tags = uniq(flatten([
                ...projects.map(project => project.tags),
                ...posts.map(post => post.tags),
            ], true), 'id').map(tag => ({...tag, title: tag.name}))
            const articleConverter = article => ({
                slug: article.slug,
                imageSrc: article.bannerImage.url
                    ? 'http://localhost:8001' + article.bannerImage.url
                    : '',
                title: article.title,
                subtitle: article.subtitle,
                content: article.content,
                creationDate: article.created.year + '-'
                    + padLeft(article.created.month, 2, '0') + '-'
                    + padLeft(article.created.day, 2, '0') + 'T'
                    + padLeft(article.created.hour, 2, '0') + ':'
                    + padLeft(article.created.minute, 2, '0') + ':'
                    + padLeft(article.created.second, 2, '0') + '.'
                    + padLeft(article.created.microsecond, 6, '0') + 'Z',
                tags: article.tags.map(tag => tag.id),
            })
            posts = posts.map(articleConverter)
            projects = projects.map(articleConverter)

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
