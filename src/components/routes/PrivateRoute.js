import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log("props", rest);
    return (
        <Route
            {...rest}
            render={props =>
                Auth.isAuthenticated ? (
                    <Component {...props} />
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
