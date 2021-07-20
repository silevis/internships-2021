import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import useProfile from '../hooks/useProfile';
import { IProfile } from '../interfaces/IProfile.interface';

import supabase from '../utils/supabase';
import Slider from './Slider';

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

  const [books, setBooks] = useState<any>(undefined);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const { data } = await axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms');
        setBooks(data?.items);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

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
          Learn Reacta
        </a>
      </header>
      {books && (
      <Slider
        entries={books?.map((book: any) => {
        return {
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          image: book.volumeInfo.imageLinks.thumbnail,
        };
      })}
        entryCount={books.length}
      />
)}
    </div>
  );
}

export default App;
