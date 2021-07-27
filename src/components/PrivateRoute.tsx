import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { IPrivateRoute } from '../interfaces/IPrivateRoute.interface';
import { isAdmin } from './UserContext';

const PrivateRoute: React.FC<IPrivateRoute> = ({ path, exact, user, children }) => {
    return isAdmin(user) ? (<Route path={path} exact={exact}> {children} </Route>)
    : (<Redirect to="/" />);
  };

export default PrivateRoute;
