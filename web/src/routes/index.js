import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './private';
import GuestRoute from './guest';
import history from './history';

import Welcome from '~/pages/Welcome';
import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';
import Recover from '~/pages/Auth/Recover';

import Dashboard from '~/pages/Dashboard';
import Projects from '~/pages/Projects';
import Tasks from '~/pages/Tasks';
import Layout from '~/layouts/Main';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={['/tasks', '/projects', '/dashboard']}>
                    <Layout>
                        <Switch>
                            <PrivateRoute path="/tasks" component={Tasks} />
                            <PrivateRoute
                                path="/projects"
                                component={Projects}
                            />
                            <PrivateRoute
                                path="/dashboard"
                                component={Dashboard}
                            />
                        </Switch>
                    </Layout>
                </Route>

                <GuestRoute path="/recover" component={Recover} />
                <GuestRoute path="/signup" component={SignUp} />
                <GuestRoute path="/signin" component={SignIn} />
                <GuestRoute path="/" exact component={Welcome} />

                <Route path="*" component={() => <p> Not Found Page </p>} />
            </Switch>
        </Router>
    );
}
