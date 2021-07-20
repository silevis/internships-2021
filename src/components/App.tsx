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
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import uIDContext from './UIdContext';

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
    <uIDContext.Provider value={15}>
      <div className="App h-full">
        <Router>
          <header className="App-header fixed w-full top-0 h-10 z-50">
            <Navigation />
          </header>
          <div className="container w-full h-screen max-w-8xl mx-auto flex mt-12 z-10">
            <Sidebar />
            <div className="min-w-0 w-full pl-5 pt-3 flex-auto lg:static lg:max-h-full lg:overflow-visible shadow-inner">
              <Switch>
                <Route path="/internships-2021" exact>
                  <Redirect to="/" />
                </Route>
                <Route path="/" exact>
                  main
                  <main>
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
                  </main>
                </Route>
                <Route path="/user" exact />
                <Route path="/admin" exact />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </uIDContext.Provider>
  );
}

export default App;
