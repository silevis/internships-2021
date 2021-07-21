import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { useUser } from './UserContext';

function Navigation() {
  const globalUser = useUser();
  return (
    <div className="">
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300">
                Books
              </span>
            </div>
          </div>

          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">

              <Link
                to="/"
                className="my-1 pl-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400
                md:mr-4 md:my-0 md:border-l md:border-gray-400"
              >
                Home
              </Link>
              <Link
                to="/user"
                className="my-1 pl-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400
                md:mr-4 md:my-0 md:border-l md:border-gray-400"
              >
                {globalUser !== null && globalUser.id !== '' ? globalUser.firstName : 'User'}
              </Link>
              <Link
                to="/admin"
                className="my-1 px-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400
                md:mr-4 md:my-0 md:border-l md:border-r md:border-gray-400"
              >
                Admin
              </Link>
              <Login />
              <Register />
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navigation;
