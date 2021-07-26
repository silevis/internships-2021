import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import Login from './Login';
import Register from './Register';
import { isLoggedIn, useUser, useUserUpdate } from './UserContext';
import supabase from '../utils/supabase';

function Navigation() {
  const loggedUser = useUser();

  const setUser = useUserUpdate();
  const [toggle, setToggled] = useState(false);
  const history = useHistory();

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

        <div className={toggle === true ? 'block items-center md:flex' : 'hidden md:block items-center'}>
          <div className="flex flex-col md:flex-row my-2 md:my-0 md:mx-6">
            <Link
              to="/"
               {/*
              className="mt-1 py-1 md:py-0 pl-4 text-gray-200 transition duration-500 ease-in-out hover:text-indigo-500 md:mr-4 md:my-0
              border-b border-t md:border-t-0 md:border-b-0 md:border-l border-gray-400"
            >
              Home
            </Link>

            <Link
              to="/books-list"
              className="my-1 py-1 md:py-0 pl-4 text-gray-200 transition duration-500 ease-in-out hover:text-indigo-500 md:mr-4 md:my-0
              border-b md:border-t-0 md:border-b-0 md:border-l border-gray-400"
            >
              Book List
            </Link>

            {isLoggedIn() ? (
              <div className="navbar-nav">
                <UserDropdown
                  title={loggedUser?.email}
                  logOut={logout}
                />
                */}
              className="btn-nav"
            >
              Home
            </Link>
            <Link
              to="/books-list"
              className="my-1 py-1 md:py-0 pl-4 text-gray-200 transition duration-500 ease-in-out hover:text-indigo-500 md:mr-4 md:my-0
              border-b md:border-t-0 md:border-b-0 md:border-l border-gray-400"
            >
              Book List
            </Link>

            {isLoggedIn() ? (
              <div className="navbar-nav">
                <UserDropdown
                  title={loggedUser?.email}
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
