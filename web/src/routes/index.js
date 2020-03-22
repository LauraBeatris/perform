import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './history';

import Welcome from '~/pages/Welcome';
import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';
import Recover from '~/pages/Auth/Recover';

import Dashboard from '~/pages/Dashboard';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/recover" component={Recover} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/" exact component={Welcome} />
            </Switch>
        </Router>
    );
}
