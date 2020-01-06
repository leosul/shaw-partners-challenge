import axios from 'axios'
import config from './../config'

const getUsers = async () => {
    try {
        const users = await axios.get(config.integrations.baseUrl + '/users')

        return users.data
    } catch (error) {
        console.error('[REPO]', error)
        return true
    }
}

const getUserByUserName = async (login) => {
    try {
        const user = await axios.get(config.integrations.baseUrl + `/users/${login}`)

        return user.data
    } catch (error) {
        console.error('[REPO]', error)
        return true
    }
}

const getUserRepositories = async (login) => {
    try {
        const user = await axios.get(config.integrations.baseUrl + `/users/${login}/repos`)

        return user.data
    } catch (error) {
        console.error('[REPO]', error)
        return true
    }
}

export const userRepository = {
    getUsers,
    getUserByUserName,
    getUserRepositories
}