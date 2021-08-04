import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './UserProvider';
import AppRouter from './AppRouter';
import ThemeProvider from '../utils/ThemeContext';

export const PageExitAnimation = {
  opacity: 0,
  transition: {
    duration: 0.5,
  },
};

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <AppRouter />
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
