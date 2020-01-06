import { userRepository } from '../repositories/userRepository'

const getUsers = async (req, res) => {
    const users = await userRepository.getUsers()
    res.json(users)
}

const getUserByUserName = async (req, res) => {
    const user = await userRepository.getUserByUserName(req.params.login)
    res.json(user)
}

const getUserRepositories = async (req, res) => {
    const repos = await userRepository.getUserRepositories(req.params.login)
    res.json(repos)
}

export const userController = {
    getUsers,
    getUserByUserName,
    getUserRepositories
}