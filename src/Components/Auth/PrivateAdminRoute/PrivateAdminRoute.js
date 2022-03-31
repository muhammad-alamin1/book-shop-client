import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../../../context/AuthContext';

const PrivateAdminRoute = ({ children, ...rest }) => {
    const { currUser } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                currUser && currUser.email === 'muhammad@gmail.com' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateAdminRoute;