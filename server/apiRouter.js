const { Router } = require('express')
const router = new Router()

router.get('/', async (req, res) => {
  res.send('API GitHub - Challenge - Shaw and Partners - Selective Process')
})

module.exports = router
