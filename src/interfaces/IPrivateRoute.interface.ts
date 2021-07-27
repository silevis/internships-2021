import React from 'react';
import { IProfile } from './IProfile.interface';

export interface IPrivateRoute {
  component: React.FC;
  path: string;
  exact: boolean;
  user: IProfile | null;
}
