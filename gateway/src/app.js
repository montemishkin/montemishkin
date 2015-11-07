// third party imports
import express from 'express'
import logger from 'morgan'


const app = express()


/* Application-wide Middlewares */

app.use(logger('dev'))


/* Routing */

app.all('*', (req, res) => res.status(200).send('success'))


export default app
