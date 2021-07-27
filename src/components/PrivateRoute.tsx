import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { IPrivateRoute } from '../interfaces/IPrivateRoute.interface';
import { isAdmin } from './UserContext';

const PrivateRoute: React.FC<IPrivateRoute> = (props) => {
    return isAdmin(props.user) ? (<Route path={props.path} exact={props.exact} component={props.component} />)
    : (<Redirect to="/" />);
  };

export default PrivateRoute;
