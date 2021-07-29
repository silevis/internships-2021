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

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ path, exact, user, children }) => {
    if (!user && isLoggedIn()) {
      return <div>Loading...</div>;
    }

    return isAdmin(user) ? (<Route path={path} exact={exact}> {children} </Route>)
    : (<Redirect to="/" />);
  };

export default PrivateRoute;
