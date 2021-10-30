// Adding necessary file 
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

// Private Route 
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner className='text-center my-5' animation="border" variant="danger" />
    }
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