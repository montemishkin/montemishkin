// fix node land
import 'babel-core/polyfill'
// third party imports
import express from 'express'
// import bodyParser from 'body-parser'
// import multer from 'multer'
// import compression from 'compression'
// import cookieSession from 'cookie-session'
// import cookieParser from 'cookie-parser'
// import logger from 'morgan'
// import session from 'express-session'
// import favicon from 'serve-favicon'
// import responseTime from 'response-time'
// import errorHandler from 'errorhandler'
// import vhost from 'vhost'
// import csrf from 'csurf'
// import directory from 'serve-index'
import serveStatic from 'serve-static'
// local imports
import frontend from 'apps/frontend'
import {buildDir, assetsDir} from 'config/projectPaths'


// top level express application instance
const app = express()
// server port to listen on
const port = 8000


/* Configure Middleware */


/* Configure Routes */

// route static files to build and assets dirs
app.use('/static', serveStatic(buildDir), serveStatic(assetsDir))
// route root to frontend app
app.use('/', frontend)


/* eslint-disable no-console */
// have server listen on port 8000
app.listen(port, () => console.log(`listening on ${port}`))
/* eslint-enable no-console */
