// third party imports
import express from 'express'
// local imports
import blog from 'apps/blog'
import projects from 'apps/projects'
import core from 'apps/core'


const app = express()


app.use('/posts', blog)
app.use('/projects', projects)
app.use(core)


export default app
