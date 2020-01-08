import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'

export default class Detail extends Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params

        const response = await api.get(`/users/${id}`)

        this.setState({ user: response.data })

        alert(response.login)
    }
    render() {
        const { user } = this.state

        return (
            <div className='user-info'>
                <h2>{user.id}</h2>
                <h1>{user.login}</h1>
                <p>
                    URL: <a href={user.html_url}>{user.html_url}</a>
                </p>
                <h1>{user.location}</h1>

            </div>
        )
    }
}