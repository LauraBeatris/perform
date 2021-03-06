import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import addToast from '~/lib/addToast';
import { store } from '~/store';

export default function PrivateRoute({ component: Component, ...rest }) {
    const { signedIn } = store.getState().user;

    useEffect(() => {
        if (!signedIn)
            addToast('You have to login in order to access this page', {
                appearance: 'error',
                autoDismiss: true,
                autoDismissTimeout: 2500,
                pauseOnHover: false,
            });
    }, [signedIn]);

    return signedIn ? (
        <Route render={props => <Component {...props} />} {...rest} />
    ) : (
        <Redirect to="/signin" />
    );
}

// <Component example={Page} /> ==> Passing a function
// <Component example={<Page />} /> ==> Passing a element
PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
};
