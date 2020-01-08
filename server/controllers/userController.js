import { userRepository } from '../repositories/userRepository'

const getUsers = async (req, res) => {
    console.log('Por User: ', req.body.link)
    const users = await userRepository.getUsers()
    res.json(users)
}

const getUsersLink = async (req, res) => {
    console.log('Por Link: ', req.params.link)
    const users = await userRepository.getUsersLink(req.params.link)
    res.json(users)
}

const getUserByUserLogin = async (req, res) => {
    //console.log(req.params.login)
    const user = await userRepository.getUserByUserLogin(req.params.login)
    res.json(user)
}

const getUserRepositories = async (req, res) => {
    const repos = await userRepository.getUserRepositories(req.params.login)
    res.json(repos)
}

export const userController = {
    getUsers,
    getUserByUserLogin,
    getUserRepositories,
    getUsersLink
}