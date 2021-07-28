import { UserProvider } from './UserContext';
import AppRouter from './AppRouter';

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
