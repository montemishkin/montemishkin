// fix node land
import 'babel-core/polyfill'
// node imports
import process from 'process'
// third party imports
import express from 'express'
// import bodyParser from 'body-parser'
// import multer from 'multer'
import compression from 'compression'
// import cookieSession from 'cookie-session'
// import cookieParser from 'cookie-parser'
import logger from 'morgan'
// import session from 'express-session'
import favicon from 'serve-favicon'
// import responseTime from 'response-time'
// import errorHandler from 'errorhandler'
// import csrf from 'csurf'
import serveStatic from 'serve-static'
// local imports
import {buildDir, assetsDir, favicon as faviconPath} from 'config/projectPaths'
import frontend from 'apps/frontend'
import api from 'apps/api'


// top level express application instance
const app = express()
// server port to listen on
const port = 8000


/* Configure Middleware */

// serve favicon
app.use(favicon(faviconPath))
// compress responses
app.use(compression())
// log requests
app.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))


/* Configure Routes */

// route static files to build and assets dirs
app.use('/static', serveStatic(buildDir), serveStatic(assetsDir))
// route api to api app
app.use('/api', api)
// route root to frontend app
app.use('/', frontend)


/* eslint-disable no-console */
// have server listen on port 8000
app.listen(port, () => console.log(`[${new Date()}] Now listening on port: ${port}`))
/* eslint-enable no-console */
