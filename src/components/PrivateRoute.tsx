import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import supabase from '../utils/supabase';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validate = (user: any) => {
  return user;
};

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
  }> = (props) => {
    const condition = validate(supabase.auth.user());

    return condition ? (<Route path={props.path} exact={props.exact} component={props.component} />)
    : (<Redirect to="/" />);
  };

export default PrivateRoute;
