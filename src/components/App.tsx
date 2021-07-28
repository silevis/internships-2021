import { UserProvider } from './UserProvider';
import AddRouter from './AddRouter';

function App() {
  return (
    <UserProvider>
      <AddRouter />
    </UserProvider>
  );
}

export default App;
