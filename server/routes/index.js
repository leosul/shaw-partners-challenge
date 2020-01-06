import { Router } from 'express'
import userRouter from './userRoutes'

const router = new Router()

router.use('/api', router)

router.use('*', (req, res, next) => {
  next()
})

router.get('/api', async (req, res) => res.send('API GitHub - Challenge - Shaw and Partners - Selective Process'))
router.use('/users', userRouter)

export default router