import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginButton from './LoginButton';
import UserDropdown from './UserDropdown';
import RegisterButton from './RegisterButton';
import { isLoggedIn, useUser, useUserUpdate, isAdmin } from './UserContext';
import supabase from '../utils/supabase';
import { successToast } from '../utils/utils';

const Navigation = () => {
  const user = useUser();

  const setUser = useUserUpdate();
  const [toggle, setToggled] = useState(false);
  const history = useHistory();
  const [items, setItems] = useState([{ link: '/user', label: 'User Profile' }, { link: '/user/books', label: 'User Books' }]);

  useEffect(() => {
    if (isAdmin(user)) {
      setItems([{ link: '/user', label: 'User Profile' }, { link: '/user/books', label: 'User Books' },
      { link: '/admin/owned', label: 'Owned' }, { link: '/admin/store', label: 'Store' }]);
    } else {
      setItems([{ link: '/user', label: 'User Profile' }, { link: '/user/books', label: 'User Books' }]);
    }
  }, [user]);

  const logout = () => {
    if (setUser) {
      setUser({
        avtar: '',
        createdAt: '',
        email: '',
        firstName: '',
        id: '',
        isAdmin: false,
        lastName: '',
      });
    }
    successToast('Logged out successfully', 'logout-success');
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
            <button
              type="button"
              className="btn-nav text-left relative"
            >
              <Link
                to="/"
              >
                Home
              </Link>
            </button>

            <button
              type="button"
              className="btn-nav text-left relative"
            >
              <Link
                to="/books-list"
              >
                Book List
              </Link>
            </button>

            {isLoggedIn() ? (
              <UserDropdown
                title={user?.email}
                items={items}
                logOut={logout}
              />
            ) : (
              <>
                <LoginButton />
                <RegisterButton />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
