import React from 'react';
import { Router, Switch } from 'react-router-dom';

import PrivateRoute from './private'
import GuestRoute from './guest'
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
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <GuestRoute path="/recover" component={Recover} />
                <GuestRoute path="/signup" component={SignUp} />
                <GuestRoute path="/signin" component={SignIn} />
                <GuestRoute path="/" exact component={Welcome} />
            </Switch>
        </Router>
    );
}
