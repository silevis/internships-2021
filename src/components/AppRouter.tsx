import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BookListView from '../views/BookListView';
import Navigation from './common/Navigation';
import BookInfoView from '../views/BookInfoView';
import BookListViewAdminOwned from '../views/BookListViewAdminOwned';
import BookListViewAdminStore from '../views/BookListViewAdminStore';
import BorrowedBooksView from '../views/BorrowedBooksView';
import UserBooksView from '../views/UserBooksView';
import {
  AdminRoute,
  UserRoute,
} from './universal/PrivateRoute';
import { useUser } from './UserProvider';
import NoMatch404 from './NoMatch404';
import UserpageView from '../views/UserpageView';
import HomepageView from '../views/HomepageView';

function AppRouter() {
  const user = useUser();
  const loc = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={loc} key={loc.pathname}>
        <Route path="/internships-2021" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/" exact>
          <HomepageView />
        </Route>
        <Route>
          <div className="bg-gray-50 h-full min-h-screen">
            <header className="sticky top-0 w-full h-auto z-50">
              <Navigation />
            </header>
            <Switch>
              <UserRoute path="/user" exact user={user}>
                <UserpageView />
              </UserRoute>
              <UserRoute path="/user/books" exact user={user}>
                <UserBooksView />
              </UserRoute>
              <AdminRoute path="/admin/owned" exact user={user}>
                <BookListViewAdminOwned />
              </AdminRoute>
              <AdminRoute path="/admin/store" exact user={user}>
                <BookListViewAdminStore />
              </AdminRoute>
              <AdminRoute path="/admin/borrowed" exact user={user}>
                <BorrowedBooksView />
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
          </div>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default AppRouter;
