import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './header';
const PrivateRoute = ({ component: Component, ...rest }) => (
    <div className="">
    <Header></Header>
    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
    </div>
)

export default PrivateRoute;