import React, { useCallback, useEffect } from 'react';
import supabase from '../utils/supabase';

function App() {
  // eslint-disable-next-line space-before-function-paren
  const fetchCallback = useCallback(async () => {
    const { user, error } = await supabase.auth.signUp({
      email: 'someone@email.com',
      password: 'nhLLRVQzFHZGKbGhgAAU',
    });
    console.log({ user, error });
  }, []);

  useEffect(() => {
    fetchCallback()
      .then()
      .catch();
  }, [fetchCallback]);

  return (
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
