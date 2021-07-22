import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import BookListView from '../views/BookListView';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import { useUser } from './UserContext';
import SliderDemo from '../views/SliderDemo';
import BookInfoPage from '../views/BookInfoView';
import UserpageView from '../views/UserpageView';

function AddRouter() {
  const globalUser = useUser();
  return (
    <div className="App h-full">
      <Router basename={process.env.PUBLIC_URL}>
        <header className="App-header fixed w-full top-0 h-10 z-50">
          <Navigation />
        </header>
        <div className="container w-full h-screen max-w-8xl mx-auto flex mt-12 z-10">
          { globalUser?.id === process.env.REACT_APP_ADMIN_ID ? '' : <Sidebar />}
          <div className="min-w-0 w-full pl-5 pt-3 flex-auto lg:static lg:max-h-full lg:overflow-visible shadow-inner">
            <Switch>
              <Route path="/internships-2021" exact>
                <Redirect to="/" />
              </Route>
              <Route path="/" exact>
                <SliderDemo />
                <BookListView />
              </Route>
              <Route path="/user" exact>
                <UserpageView />
              </Route>
              <Route path="/admin" exact>
                { globalUser?.id === process.env.REACT_APP_ADMIN_ID ? <Link to="admin/store">store</Link> : <Redirect to="/" />}
              </Route>
              <Route path="/admin/store" exact>
                { globalUser?.id === process.env.REACT_APP_ADMIN_ID ? <BookListView /> : <Redirect to="/" />}
              </Route>
              <Route path="/admin/owned" exact>
                { globalUser?.id === process.env.REACT_APP_ADMIN_ID ? 'placeholder' : <Redirect to="/" />}
              </Route>
              <Route path="/books-list" exact>
                <BookListView />
              </Route>
              <Route path="/book/:id" exact>
                <BookInfoPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default AddRouter;
