import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import BookListView from '../views/BookListView';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import { useUser } from './UserContext';
import BookInfoPage from '../views/BookInfoView';
import UserpageView from '../views/UserpageView';
import SidebarAdmin from './SidebarAdmin';
import BookListViewAdmin from '../views/BookListViewAdmin';
import HomepageView from '../views/HomepageView';

function AddRouter() {
  const globalUser = useUser();
  return (
    <div className="h-full">
      <Router basename={process.env.PUBLIC_URL}>
        <header className="fixed w-full top-0 h-10 z-50">
          <Navigation />
        </header>
        {/* TODO: CLEAN THIS SHIT */}
        <div className="container w-4/5 h-full max-w-8xl mx-auto flex mt-12 z-10 justify-center">
          <Switch>
            <Route path="/internships-2021" exact>
              <Redirect to="/" />
            </Route>
            <Route path="/" exact>
              <HomepageView />
            </Route>
            <Route path="/user" exact>
              <UserpageView />
            </Route>
            <Route path="/admin" exact>
              {globalUser?.id === process.env.REACT_APP_ADMIN_ID ? <span>Witaj adminie</span> : <Redirect to="/" />}
              <SidebarAdmin />
            </Route>
            <Route path="/admin/store" exact>
              {globalUser?.id === process.env.REACT_APP_ADMIN_ID ? <BookListViewAdmin /> : <Redirect to="/" />}
              <SidebarAdmin />
            </Route>
            <Route path="/admin/owned" exact>
              {globalUser?.id === process.env.REACT_APP_ADMIN_ID ? <BookListViewAdmin /> : <Redirect to="/" />}
              <SidebarAdmin />
            </Route>
            <Route path="/books-list" exact>
              <Redirect to="/books-list/*/0" />
            </Route>
            <Route path="/books-list/:q?/:rating?">
              {(globalUser?.id === process.env.REACT_APP_ADMIN_ID ? <SidebarAdmin /> : <Sidebar />)}
              <BookListView />
            </Route>
            <Route path="/book/:id" exact>
              <BookInfoPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default AddRouter;
