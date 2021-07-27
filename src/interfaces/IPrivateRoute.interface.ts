import { IProfile } from './IProfile.interface';

export interface IPrivateRoute {
  path: string;
  exact: boolean;
  user: IProfile | null;
}
