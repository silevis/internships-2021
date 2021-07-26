import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { IPrivateRoute } from '../interfaces/IPrivateRoute.interface';
import { isAdmin } from './UserContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validate = (user: any) => {
  return isAdmin(user);
};

const PrivateRoute: React.FC<IPrivateRoute> = (props) => {
    return validate(props.user) ? (<Route path={props.path} exact={props.exact} component={props.component} />)
    : (<Redirect to="/" />);
  };

export default PrivateRoute;
