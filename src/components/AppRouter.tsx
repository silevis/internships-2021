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
import BorrowedBooksView from '../views/BorrowedBooksView';
import {
  AdminRoute,
  UserRoute,
} from './PrivateRoute';
import { useUser } from './UserContext';
import useUserInfo from '../hooks/useUserInfo';
import NoMatch404 from './NoMatch404';
import UserpageView from '../views/UserpageView';
import HomepageView from '../views/HomepageView';

function AppRouter() {
  const loggedUser = useUser();
  const userInfo = useUserInfo(loggedUser?.id ?? null);

  return (
    <div className="h-full">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/internships-2021" exact>
            <Redirect to="/" />
          </Route>
          <Route path="/" exact>
            <HomepageView />
          </Route>
          <Route>
            <header className="fixed w-full top-0 h-10 z-50">
              <Navigation />
            </header>
            <Switch>
              <UserRoute path="/user" exact user={userInfo}>
                <UserpageView />
              </UserRoute>
              <UserRoute path="/user/books" exact user={userInfo}>
                <BorrowedBooksView />
              </UserRoute>
              <AdminRoute path="/admin/owned" exact user={userInfo}>
                <BookListViewAdminOwned />
              </AdminRoute>
              <AdminRoute path="/admin/store" exact user={userInfo}>
                <BookListViewAdminStore />
              </AdminRoute>
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
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
