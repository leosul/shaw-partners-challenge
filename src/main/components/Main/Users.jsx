import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import '../Main/styles.css'

export default class Main extends Component {
    state = {
        users: [],
        link: []
    }

    componentDidMount() {
        this.loadUsers()
    }

    loadUsers = async () => {
        const response = await api.get('/users')

        this.setState({ users: response.data.users, link: response.data.link.next.url })
    }

    nextPage = async () => {

        const since = this.state.link.split("?")
        const response = await api.get(`users/link/${since[1]}`)

        this.setState({ users: response.data.users, link: response.data.link.next.url })
    }

    firsPage = () => {
        this.loadUsers()
    }

        render() {
            const { users } = this.state

            return (
                <div className="user-list">
                    {users.map(user => (
                        <article key={user.id}>
                            <strong>{user.id + ' - ' + user.login}</strong>
                            <Link to={`/users/${user.login}`}>Details</Link>
                        </article>
                    ))}
                    <div className="actions">
                        <button onClick={this.firsPage}>First</button>
                        <button onClick={this.nextPage}>Next</button>
                    </div>
                </div>
            )
        }
}