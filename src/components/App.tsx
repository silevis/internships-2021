import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import BookListView from '../views/BookListView';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Slider from './Slider';
import uIDContext from './UIdContext';

function App() {
  const [books, setBooks] = useState<any>(undefined);

  useEffect(() => {
    const fetchData = async () => {
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
                <Route path="/books-list" exact>
                  <BookListView />
                </Route>
                <Route path="slider-demo" exact>
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
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </uIDContext.Provider>
  );
}

export default App;
