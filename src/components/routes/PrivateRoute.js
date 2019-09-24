import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from '../../services/authService';
import Layout from '../layouts/Layout';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                authService.isAuthenticated ? (
                    <Layout {...props} Component={Component}/>
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}


export default PrivateRoute;
