const app = require('./../index')

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log('API GitHub - listening on ', app.get('port'))
})
