import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navigation from './Navigation';
import Sidebar from './Sidebar';

function App() {
  return (
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
  );
}

export default App;
