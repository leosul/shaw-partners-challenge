const { Router } = require('express')
const userController = require('./../controllers/userController')
const router = new Router()

router.get('/', userController.getUsers)
router.get('/link/:link', userController.getUsersLink)
router.get('/:login', userController.getUserByUserLogin)
router.get('/:login/repos', userController.getUserRepositories)

module.exports = router