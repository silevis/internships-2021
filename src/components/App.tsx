import { UserProvider } from './UserContext';
import AddRouter from './Router';

const App = () => {
  return (
    <UserProvider>
      <AddRouter />
    </UserProvider>
  );
};

export default App;
