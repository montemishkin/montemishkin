// third party imports
import express from 'express'
// local imports
import projects from './data'

const app = express()


app.get('/', (req, res) => {
    res.send(projects)
})


app.get('/:slug', (req, res) => {
    res.send(projects.filter(project => project.slug === req.params.slug)[0])
})


export default app
