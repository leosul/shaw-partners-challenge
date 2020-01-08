const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)
app.use(errorHandler)

function errorHandler(err, req, res, next) {
  console.log('INTERNAL ERROR', err)
  res.status(500).json({ internal_server_error: err })
}

module.exports = app
