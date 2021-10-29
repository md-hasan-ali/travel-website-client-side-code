// Adding necessary file 
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

// Private Route 
const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => user?.displayName ? children : <Redirect to={{
                pathname: "/logIn",
                state: { from: location }
            }}></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;