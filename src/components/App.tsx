import React, { useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import useProfile from '../hooks/useProfile';
import { IProfile } from '../interfaces/IProfile.interface';
import supabase from '../utils/supabase';
import BookInfoPage from '../views/BookInfoPage';
import Navigation from './Navigation';

function App() {
  // eslint-disable-next-line space-before-function-paren
  const a = useProfile('1e7b2a5f-7423-4cc4-aa70-003db70da303');
  // eslint-disable-next-line space-before-function-paren
  const fetchCallback = useCallback(async () => {
    // eslint-disable-next-line
    const { user, error } = await supabase.auth.signUp({
      email: 'somesone@email.com',
      password: 'nhLLRVQzFHZGKbGhgAAU',
    });
    if (user) {
      await supabase.from<IProfile>('profiles').insert({
        id: user.id,
        firstName: 'fr',
        lastName: 'rfsd',
      });
    }
  }, []);

  useEffect(() => {
    fetchCallback().then().catch();
  }, [fetchCallback]);

  return (
    <div className="App bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/internships-2021" exact>
            <Redirect to="/" />
          </Route>
          <Route path="/" exact>
            main
            <header className="App-header">
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Reacta
              </a>
            </header>
          </Route>
          <Route path="/user" exact />
          <Route path="/admin" exact />
          <Route path="/book/info/:id" exact>
            <BookInfoPage id="1" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
