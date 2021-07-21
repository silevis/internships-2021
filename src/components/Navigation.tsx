import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { useUser } from './UserContext';

function Navigation() {
  const globalUser = useUser();
  const [toggle, setToggled] = useState(false);

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300">
              Books
            </span>
          </div>
          <button
            type="button"
            className="border-gray-400 text-gray-400 rounded-md border max-h-full px-1
            transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white md:hidden"
            onClick={() => setToggled(!toggle)}
          >
            ☰
          </button>
        </div>

        <div className={toggle === true ? 'block items-center md:flex' : 'hidden md:block items-center'}>
          <div className="flex flex-col md:flex-row my-2 md:my-0 md:mx-6">

            <Link
              to="/"
              className="my-1 pl-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400
              py-3 border-b border-t md:border-b-0 md:py-0 md:border-t-0 md:mr-4 md:my-0 md:border-l border-gray-400"
            >
              Home
            </Link>
            <Link
              to="/user"
              className="my-1 pl-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400
              py-3 border-b md:border-b-0 md:mr-4 md:py-0 md:my-0 md:border-l border-gray-400"
            >
              {globalUser !== null && globalUser.id !== '' ? globalUser.firstName : 'User'}
            </Link>
            <Link
              to="/admin"
              className="my-1 px-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400
              py-3 border-b md:border-b-0 md:mr-4 md:py-0 md:my-0 md:border-l md:border-r border-gray-400"
            >
              Admin
            </Link>
            <Login />
            <Register />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
