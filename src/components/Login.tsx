import { useState } from 'react';
import { useFormik } from 'formik';
import { supabase } from '../utils/supabase';
import { useUserUpdate } from './UserContext';

const Login = () => {
  const setUser = useUserUpdate();
  const [login, setLogin] = useState(false);
  const formikLogin = useFormik({
    initialValues: {
      emailAdress: '',
      password: '',
    },
    // eslint-disable-next-line
    onSubmit: async (values) => {
      // eslint-disable-next-line
      const { user, error } = await supabase.auth.signIn({
        email: values.emailAdress,
        password: values.password,
      });
      setLogin(!login);
      if (user) {
        // eslint-disable-next-line no-unused-expressions
        setUser && setUser({
          id: user?.id,
          firstName: user?.email,
          lastName: 'unknown',
        });
      }
    },
  });

  return (
    <div>
      <div
        onClick={() => setLogin(!login)}
        className="my-1 pl-4 pb-1 md:pb-0 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400
        md:mr-4 md:my-0 border-b md:border-b-0 md:border-l border-gray-400 w-full cursor-pointer"
      >Sign In
      </div>
      {login && (
        <div className="fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl">
            <div className="flex justify-between">
              <h1 className="font-bold">Login</h1>
              <button
                type="button"
                onClick={() => setLogin(!login)}
                className="border-red-400 text-red-400 rounded-sm border-2 max-h-full px-2
              transition duration-500 hover:bg-red-400 hover:text-white"
              >
                X
              </button>
            </div>
            <div>
              <form onSubmit={formikLogin.handleSubmit}>
                <div className="flex">
                  <div className="mr-1">
                    <label htmlFor="email-adress" className="text-xs block">Email adress:</label>
                    <input
                      id="emailAdress"
                      name="emailAdress"
                      type="email"
                      placeholder="Email-adress"
                      onChange={formikLogin.handleChange}
                      value={formikLogin.values.emailAdress}
                      className="p-1 placeholder-gray-400 text-gray-600 border outline-none mb-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="text-xs block">Password:</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={formikLogin.handleChange}
                      value={formikLogin.values.password}
                      className="p-1 placeholder-gray-400 text-gray-600 border outline-none mb-2"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="border-gray-400 text-gray-400 rounded-sm border-2 max-h-full p-1
                  transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>

      )}

    </div>
  );
};

export default Login;
