import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import BookListView from '../views/BookListView';
import Navigation from './Navigation';
import BookInfoView from '../views/BookInfoView';
import BookListViewAdminOwned from '../views/BookListViewAdminOwned';
import BookListViewAdminStore from '../views/BookListViewAdminStore';
import BorrowedBooksView from '../views/BorrowedBooksView';
import {
  AdminRoute,
  UserRoute,
} from './PrivateRoute';
import { useUser } from './UserProvider';
import NoMatch404 from './NoMatch404';
import UserpageView from '../views/UserpageView';
import HomepageView from '../views/HomepageView';

function AppRouter() {
  const user = useUser();

  return (
    <div className="h-full bg-gray-50">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/internships-2021" exact>
            <Redirect to="/" />
          </Route>
          <Route path="/" exact>
            <HomepageView />
          </Route>
          <Route>
            <header className="sticky top-0 w-full h-auto z-50">
              <Navigation />
            </header>
            <Switch>
              <UserRoute path="/user" exact user={user}>
                <UserpageView />
              </UserRoute>
              <UserRoute path="/user/books" exact user={user}>
                <BorrowedBooksView />
              </UserRoute>
              <AdminRoute path="/admin/owned" exact user={user}>
                <BookListViewAdminOwned />
              </AdminRoute>
              <AdminRoute path="/admin/store" exact user={user}>
                <BookListViewAdminStore />
              </AdminRoute>
              <Route path="/books-list" exact>
                <Redirect to="/books-list/*/0" />
              </Route>
              <Route path="/books-list/:q?/:rating?">
                <BookListView />
              </Route>
              <Route path="/book/:id" exact>
                <BookInfoView />
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
