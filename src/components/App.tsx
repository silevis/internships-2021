import { UserProvider } from './UserContext';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
};

export default App;
