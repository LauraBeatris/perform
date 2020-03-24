import React from 'react';
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { store } from '~/store'

export default function GuestRoute({component: Component, ...rest}) {
    const { signedIn } = store.getState().user

    return (
        !signedIn ?
            <Route render={(props) => <Component {...props} />} {...rest}/>
            :
            <Redirect to="/dashboard"/>
    )
}

GuestRoute.propTypes = {
    component: PropTypes.func.isRequired
}
