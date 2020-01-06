import { Router } from 'express'
import { userController } from './../controllers/userController'

const router = new Router()

router.get('/', userController.getUsers)

export default router