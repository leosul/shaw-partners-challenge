const { Router } = require('express')
const userRouter = require('./userRoutes')
const router = new Router()
const config = require('./../config')

router.get('/', async(req, res) => res.send('API GitHub - Challenge - Shaw and Partners - Selective Process'))
router.use('/users', userRouter)

module.exports = router