import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './private';
import GuestRoute from './guest';
import history from './history';

import Welcome from '~/pages/Welcome';
import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';
import Recover from '~/pages/Auth/Recover';

import Account from '~/pages/Account';
import Dashboard from '~/pages/Dashboard';
import Project from '~/pages/Project';
import Tasks from '~/pages/Tasks';
import Layout from '~/layouts/Main';
import Team from '~/pages/Team';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                {/* Sharing the layout to the exact routes */}
                <Route
                    path={[
                        '/tasks',
                        '/team/projects',
                        '/dashboard',
                        '/teams',
                        '/account',
                    ]}
                >
                    <Layout>
                        <Switch>
                            <PrivateRoute path="/account" component={Account} />

                            <PrivateRoute path="/tasks" component={Tasks} />

                            <PrivateRoute
                                path="/team/projects/:id"
                                component={Project}
                            />
                            <PrivateRoute
                                exact
                                path="/team/projects"
                                component={Team}
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
