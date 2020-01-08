const express = require('express')
const userRouter = require('./userRoutes')

const router = new express.Router()

router.use('/api', router)

router.use('*', (req, res, next) => {
  next()
})

router.get('/api', async (req, res) => res.send('API GitHub - Challenge - Shaw and Partners - Selective Process'))
router.use('/users', userRouter)

module.exports = router