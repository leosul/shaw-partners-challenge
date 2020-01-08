const userRepository = require('../repositories/userRepository')

const getUsers = async (req, res) => {
    const users = await userRepository.getUsers()
    res.json(users)
}

const getUsersLink = async (req, res) => {
    const users = await userRepository.getUsersLink(req.params.link)
    res.json(users)
}

const getUserByUserLogin = async (req, res) => {
    const user = await userRepository.getUserByUserLogin(req.params.login)
    res.json(user)
}

const getUserRepositories = async (req, res) => {
    const repos = await userRepository.getUserRepositories(req.params.login)
    res.json(repos)
}

module.exports = {
    getUsers,
    getUserByUserLogin,
    getUserRepositories,
    getUsersLink
}