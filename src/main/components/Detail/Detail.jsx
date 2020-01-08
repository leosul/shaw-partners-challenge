import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default class Detail extends Component {
    state = {
        user: {},
        repos: []
    }

    async componentDidMount() {
        const { id } = this.props.match.params

        const response = await api.get(`/users/${id}`)

        this.setState({ user: response.data })

        this.loadRepos()
    }

    loadRepos = async () => {
        const { login } = this.state.user
        const response = await api.get(`users/${login}/repos`)

        this.setState({ repos: response.data.repos })
    }

    render() {
        const { user, repos } = this.state

        return (
            <div className='user-info'>
                <h1>Id: {user.id}  - {user.login}</h1>
                <h2>Login: {user.login}</h2>
                <p>
                    URL: <a href={user.html_url}>{user.html_url}</a>
                </p>
                <h2>Created At: {moment(user.created_at).format('DD/MM/YYYY')}</h2>

                <br />
                <div>
                    <table className='playlistTable'>
                        <tr>
                            <td>ID</td>
                            <td>Repository Name</td>
                            <td>URL</td>
                        </tr>
                        {repos.map(repo => (
                            <tr>
                                <td>{repo.id}</td>
                                <td>{repo.name}</td>
                                <td><a href={repo.html_url}>{repo.html_url}</a></td>
                            </tr>
                        ))}
                    </table>
                </div>

                <article>
                    <Link to={`/users`}>Return</Link>
                </article>
            </div >
        )
    }
}



// <div className="repo-list">
//                     {repos.map(repo => (
//                         <article key={repo.id}> 
//                             <strong>{repo.id} - {repo.name}</strong>
//                             <p className='repo-url'>
//                                 URL: <a href={repo.html_url}>{repo.html_url}</a>
//                             </p>
//                         </article>
//                     ))}
//                 </div>