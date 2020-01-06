import { Router } from 'express'
import { userController } from './../controllers/userController'

const router = new Router()

router.get('/', userController.getUsers)
router.get('/:login', userController.getUserByUserName)
router.get('/:login/repos', userController.getUserRepositories)

export default router