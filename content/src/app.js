// third party imports
import express from 'express'
import logger from 'morgan'
// local imports
import postsApp from './posts'
import projectsApp from './projects'
import tagsApp from './tags'


const app = express()


/* Application-wide Middlewares */

app.use(logger('dev'))


/* Routing */

app.use('/posts', postsApp)
app.use('/projects', projectsApp)
app.use('/tags', tagsApp)


export default app
