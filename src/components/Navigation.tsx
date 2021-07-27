import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import Login from './Login';
import Register from './Register';
import { isLoggedIn, useUser, useUserUpdate, isAdmin } from './UserContext';
import supabase from '../utils/supabase';
import useUserInfo from '../hooks/useUserInfo';

function Navigation() {
  const loggedUser = useUser();

  const setUser = useUserUpdate();
  const [toggle, setToggled] = useState(false);
  const history = useHistory();
  const userInfo = useUserInfo(loggedUser?.id ?? null);
  const [items, setItems] = useState([{ link: '/user', label: 'User Profile' }, { link: '/books-list', label: 'User Books' }]);

  useEffect(() => {
    if (isAdmin(userInfo)) {
      setItems([{ link: '/user', label: 'User Profile' }, { link: '/books-list', label: 'User Books' },
      { link: '/admin/owned', label: 'Owned' }, { link: '/books-list', label: 'Store' }]);
    } else {
      setItems([{ link: '/user', label: 'User Profile' }, { link: '/books-list', label: 'User Books' }]);
    }
  }, [userInfo]);

  const logout = () => {
    // eslint-disable-next-line no-unused-expressions
    setUser && setUser({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      avatarUrl: '',
    });
    supabase.auth.signOut();
    history.push('/');
  };

  return (
    <nav className="bg-gray-700 shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div>
              <span className="text-xl font-bold text-white dark:text-white md:text-2xl">
                Books
              </span>
            </div>
          </Link>
          <button
            type="button"
            className="border-gray-400 text-gray-200 rounded-md border max-h-full px-1
            transition duration-500 ease-in-out hover:bg-gray-200 hover:text-gray-700 md:hidden"
            onClick={() => setToggled(!toggle)}
          >
            ☰
          </button>
        </div>

        <div className={toggle ? 'block items-center md:flex' : 'hidden md:block items-center'}>
          <div className="flex flex-col md:flex-row my-2 md:my-0 md:mx-6">
            <Link
              to="/"
              className="btn-nav"
            >
              Home
            </Link>
            <Link
              to="/books-list"
              className="btn-nav"
            >
              Book List
            </Link>

            {isLoggedIn() ? (
              <div className="navbar-nav">
                <UserDropdown
                  title={loggedUser?.email}
                  items={items}
                  logOut={logout}
                />
              </div>
            ) : (
              <>
                <Login />
                <Register />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
