import axios from 'axios'
import config from './../config'
import parse from '../utils/parseHeader'

const getUsers = async () => {
    try {
        //console.log(link)
        const users = await axios.get(config.integrations.baseUrl + `/users`)

        return {
            users: users.data,
            link: parse(users.headers.link)
        }
    } catch (error) {
        console.error('[REPO]', error)
        return true
    }
}

const getUsersLink = async (link) => {
    console.log(config.integrations.baseUrl + '/users?' + link)
    try {
        const users = await axios.get(config.integrations.baseUrl + '/users?' + link)

        return {
            users: users.data,
            link: parse(users.headers.link)
        }
    } catch (error) {
        console.error('[REPO]', error)
        return true
    }
}

const getUserByUserLogin = async (login) => {
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
        const repo = await axios.get(config.integrations.baseUrl + `/users/${login}/repos`)

        console.log(config.integrations.baseUrl + `/users/${login}/repos`)
        //console.log('runQuery', repo, JSON.stringify(repo.data))

        return { repos: repo.data }
    } catch (error) {
        console.error('[REPO]', error)
        return true
    }
}

export const userRepository = {
    getUsers,
    getUserByUserLogin,
    getUserRepositories,
    getUsersLink
}