import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from '~/pages/Welcome';
import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="signup" component={SignUp} />
                <Route path="signin" component={SignIn} />
                <Route path="/" exact component={Welcome} />
            </Switch>
        </BrowserRouter>
    );
}
