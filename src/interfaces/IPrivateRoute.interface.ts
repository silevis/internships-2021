export interface IPrivateRoute {
  path: string;
  exact: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
}
