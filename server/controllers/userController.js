import { userRepository } from '../repositories/userRepository'

const getUsers = async (req, res) => {
    const users = await userRepository.getUsers()
    res.json(users)
}

export const userController = {
    getUsers
}