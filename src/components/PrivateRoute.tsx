import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { IProfile } from '../interfaces/IProfile.interface';
import { isAdmin, isLoggedIn } from './UserContext';

interface IPrivateRouteProps {
  path: string;
  exact: boolean;
  user: IProfile | null;
}

const AdminRoute: React.FC<IPrivateRouteProps> = ({ path, exact, user, children }) => {
    return isAdmin(user) ? (<Route path={path} exact={exact}> {children} </Route>)
      : (<Redirect to="/" />);
    };

  const UserRoute: React.FC<IPrivateRouteProps> = ({ path, exact, children }) => {
    return isLoggedIn() ? (<Route path={path} exact={exact}> {children} </Route>)
      : (<Redirect to="/" />);
  };

export default { AdminRoute, UserRoute };
