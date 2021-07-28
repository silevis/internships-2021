import { UserProvider } from './UserProvider';
import AddRouter from './AddRouter';

const App = () => {
  return (
    <UserProvider>
      <AddRouter />
    </UserProvider>
  );
};

export default App;
