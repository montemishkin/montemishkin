// third party imports
import express from 'express'
// local imports
import tags from './tags'


const app = express()


app.use('/tags', tags)


export default app
