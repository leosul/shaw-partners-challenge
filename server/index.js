import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)
app.use(errorHandler)

function errorHandler (err, req, res, next) {
  console.log('INTERNAL ERROR', err)
  res.status(500).json({ internal_server_error: err })
}

export default app
