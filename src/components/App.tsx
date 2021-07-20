import React, { useCallback, useEffect } from 'react';
// import useProfile from '../hooks/useProfile';
import BookListView from '../views/BookListView';
import { IProfile } from '../interfaces/IProfile.interface';
import supabase from '../utils/supabase';

function App() {
  // eslint-disable-next-line space-before-function-paren
  // const a = useProfile('1e7b2a5f-7423-4cc4-aa70-003db70da303');
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
    <div className="App w-screen">
      <BookListView />
    </div>
  );
}

export default App;
