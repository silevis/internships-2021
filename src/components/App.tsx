import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './UserContext';
import AppRouter from './AppRouter';

export const PageExitAnimation = {
  opacity: 0,
  transition: {
    duration: 0.5,
  },
};

const App = () => {
  return (
    <UserProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <AppRouter />
      </Router>
    </UserProvider>
  );
};

export default App;
