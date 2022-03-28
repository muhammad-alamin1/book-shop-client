import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../../context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { currUser } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                currUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;