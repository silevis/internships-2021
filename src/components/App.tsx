import React from 'react';
import useUser from '../hooks/useUser';

function App() {
  useUser('dsfdskfkds');

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
    </div>
  );
}

export default App;
