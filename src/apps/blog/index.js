// third party imports
import express from 'express'
// local imports
import posts from './data'

const app = express()


app.get('/', (req, res) => {
    res.send(posts)
})


app.get('/:slug', (req, res) => {
    res.send(posts.filter(post => post.slug === req.params.slug)[0])
})


export default app
