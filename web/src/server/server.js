// third party imports
import express from 'express'
import compression from 'compression'
import logger from 'morgan'
import favicon from 'serve-favicon'
import serveStatic from 'serve-static'
// local imports
import projectPaths from 'config/projectPaths'
import settings from 'config/settings'
const {
    publicDir,
    favicon: faviconPath,
    publicStaticPath,
} = projectPaths
import universalServer from './universal'


const server = express()


/* Server-wide Middleware */

// compress responses
server.use(compression())
// log requests
server.use(logger(settings.expressLogStyle))
// serve favicon
server.use(favicon(faviconPath))


/* Routing */

// route static files to public dir
server.use(publicStaticPath, serveStatic(publicDir))
// route all surviving requests through react-router routes
server.all('*', universalServer)


export default server
