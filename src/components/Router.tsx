import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import BookListView from '../views/BookListView';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import SliderDemo from '../views/SliderDemo';
import BookInfoPage from '../views/BookInfoView';
import SidebarAdmin from './SidebarAdmin';
import BookListViewAdminOwned from '../views/BookListViewAdminOwned';
import BookListViewAdminStore from '../views/BookListViewAdminStore';
import PrivateRoute from './PrivateRoute';
import { useUser, isAdmin } from './UserContext';
import useUserInfo from '../hooks/useUserInfo';
import NoMatch404 from './NoMatch404';
import UserpageView from '../views/UserpageView';

function AddRouter() {
  const loggedUser = useUser();
  const userInfo = useUserInfo(loggedUser?.id ?? null);

  return (
    <div className="App h-full">
      <Router basename={process.env.PUBLIC_URL}>
        <header className="App-header fixed w-full top-0 h-10 z-50">
          <Navigation />
        </header>
        <div className="container w-full h-full max-w-8xl mx-auto flex mt-12 z-10">
          {isAdmin(userInfo) ? <SidebarAdmin /> : <Sidebar />}
          <div className="min-w-0 w-full pl-5 pt-3 flex-auto lg:static lg:max-h-full lg:overflow-visible shadow-inner">
            <Switch>
              <Route path="/internships-2021" exact>
                <Redirect to="/" />
              </Route>
              <Route path="/" exact>
                <div className="justify-start">
                  <SliderDemo />
                </div>
                <BookListView />
              </Route>
              <Route path="/user" exact>
                <UserpageView />
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
          </div>
        </div>
      </Router>
    </div>
  );
}

export default AddRouter;
