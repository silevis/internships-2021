import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { IPrivateRoute } from '../interfaces/IPrivateRoute.interface';
import { isAdmin, isLoggedIn } from './UserContext';

  const AdminRoute: React.FC<IPrivateRoute> = ({ path, exact, user, children }) => {
    return isAdmin(user) ? (<Route path={path} exact={exact}> {children} </Route>)
      : (<Redirect to="/" />);
    };

  const UserRoute: React.FC<IPrivateRoute> = ({ path, exact, user, children }) => {
    return isLoggedIn() ? (<Route path={path} exact={exact}> {children} </Route>)
      : (<Redirect to="/" />);
  };

export default { AdminRoute, UserRoute };
