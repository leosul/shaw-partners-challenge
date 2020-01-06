const express = require('express')
const bodyParser = require('body-parser')
const apiRouter = require('./apiRouter')

const app = express()
app.use(bodyParser.json())

app.set('port', process.env.PORT || 3001)
app.use('/api', apiRouter)

app.listen(app.get('port'), () => {
  console.log('API GitHub - listening on ', app.get('port'))
})

module.exports = app