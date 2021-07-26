import React from 'react';

export interface IPrivateRoute {
  component: React.FC;
  path: string;
  exact: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
}
