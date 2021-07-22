import {
  Route,
  Redirect,
} from 'react-router-dom';
import supabase from '../utils/supabase';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PrivateRoute({ component: Component }: any, redirectTo: string, path: string) {
  const user = supabase.auth.user();

  if (user && user.id === process.env.REACT_APP_ADMIN_ID) {
    return (
      <Route
        path={path}
        exact
        render={() => (
          user && user.id === process.env.REACT_APP_ADMIN_ID ? Component : <Redirect to="/" />
      )}
      />
    );
  }
  return <Redirect to={redirectTo} />;
}

export default PrivateRoute;
