import React from 'react'
import './../styles.css'
import Routes from './routes/routes'

import Header from './components/Header/Header'
//import Main from '../main/components/Main/Users'

export default props => (
    <div className="container">
        <Header />
        <Routes />
    </div>
)