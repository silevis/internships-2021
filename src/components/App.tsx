import { UserProvider } from './UserContext';
import AddRouter from './Router';

function App() {
    return (
      <UserProvider>
        <AddRouter />
      </UserProvider>
  );
}

export default App;
