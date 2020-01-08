import { Router } from 'express'
import { userController } from './../controllers/userController'

const router = new Router()

router.get('/', userController.getUsers)
router.get('/link/:link', userController.getUsersLink)
router.get('/:login', userController.getUserByUserLogin)
router.get('/:login/repos', userController.getUserRepositories)

export default router