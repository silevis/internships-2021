import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { useUser, useUserUpdate } from './UserContext';

function Navigation() {
  const globalUser = useUser();
  const setUser = useUserUpdate();

  const logout = () => {
    // eslint-disable-next-line no-unused-expressions
    setUser && setUser({
      id: '',
      firstName: '',
      lastName: '',
    });
  };

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
                className="border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2
                transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100"
              >
                Home
              </Link>
              { globalUser !== null && globalUser.id === process.env.REACT_APP_ADMIN_ID && globalUser.firstName !== '' ? (
                <Link
                  to="/admin"
                  className="border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2
                  transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100"
                >
                  Admin
                </Link>
              ) : ''}
              { globalUser !== null && globalUser.id !== process.env.REACT_APP_ADMIN_ID && globalUser.firstName !== '' ? (
                <Link
                  to="/user"
                  className="border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2
                  transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100"
                >
                  { globalUser.firstName }
                </Link>
              ) : ''}
              { globalUser !== null && globalUser.id !== '' && globalUser.firstName !== '' ? (
                <button
                  type="button"
                  onClick={logout}
                  className="border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2
                transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100"
                >
                  Logout
                </button>
              ) : (
                <div className="flex">
                  <Login />
                  <Register />
                </div>
              ) }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
