import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from '~/pages/Welcome';
import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';
import Recover from '~/pages/Auth/Recover';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/recover" component={Recover} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/" exact component={Welcome} />
            </Switch>
        </BrowserRouter>
    );
}
