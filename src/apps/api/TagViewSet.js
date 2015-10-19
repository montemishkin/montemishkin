// third party imports
import express from 'express'
// local imports
import tags from './fakeData/tags'

const app = express()


app.get('/', (req, res) => {
    res.send(tags)
})


app.get('/:slug', (req, res) => {
    res.send(tags.filter(tag => tag.slug === req.params.slug)[0])
})


export default app
