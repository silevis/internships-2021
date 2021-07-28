import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import BookListView from '../views/BookListView';
import Navigation from './Navigation';
import BookInfoPage from '../views/BookInfoView';
import BookListViewAdminOwned from '../views/BookListViewAdminOwned';
import BookListViewAdminStore from '../views/BookListViewAdminStore';
import PrivateRoute from './PrivateRoute';
import { useUser } from './UserContext';
import useUserInfo from '../hooks/useUserInfo';
import NoMatch404 from './NoMatch404';
import UserpageView from '../views/UserpageView';
import HomepageView from '../views/HomepageView';
import BorrowedBooksView from '../views/BorrowedBooksView';

function AddRouter() {
  const loggedUser = useUser();
  const userInfo = useUserInfo(loggedUser?.id ?? null);

  return (
    <div className="h-full">
      <Router basename={process.env.PUBLIC_URL}>
        <header className="fixed w-full top-0 h-10 z-50">
          <Navigation />
        </header>
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
          <Route path="/user/books" exact>
            <BorrowedBooksView />
          </Route>
          <PrivateRoute path="/admin/owned" exact user={userInfo}>
            <BookListViewAdminOwned />
          </PrivateRoute>
          <PrivateRoute path="/admin/store" exact user={userInfo}>
            <BookListViewAdminStore />
          </PrivateRoute>
          <Route path="/books-list" exact>
            <Redirect to="/books-list/*/0" />
          </Route>
          <Route path="/books-list/:q?/:rating?">
            <BookListView />
          </Route>
          <Route path="/book/:id" exact>
            <BookInfoPage />
          </Route>
          <Route path="*">
            <NoMatch404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default AddRouter;
