import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Main from '../components/Main/Users'
import Detail from '../components/Detail/Detail'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/users' component={Main} />
            <Route path='/users/:id' component={Detail} />
            <Redirect from='*' to='/users' />
        </Switch>
    </BrowserRouter>
)

export default Routes