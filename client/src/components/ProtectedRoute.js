import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

function ProtectedRoute({ component: Component, ...rest }) {
    const isAuthenticated = Cookies.get('access_token');

    return <Route {...rest} render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)} />;
}

export default ProtectedRoute;
