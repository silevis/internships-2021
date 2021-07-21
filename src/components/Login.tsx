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
      <button
        type="button"
        onClick={() => setLogin(!login)}
        className="border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2
                  transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100"
      >Login
      </button>
      {login && (
        <div className="fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl">
            <button type="button" onClick={() => setLogin(!login)} className="border-solid bg-red-300 rounded-md">Exit</button>
            <div>
              <form onSubmit={formikLogin.handleSubmit}>
                <label htmlFor="email-adress">Email adress:</label>
                <input
                  id="emailAdress"
                  name="emailAdress"
                  type="email"
                  placeholder="Email-adress"
                  onChange={formikLogin.handleChange}
                  value={formikLogin.values.emailAdress}
                  className="border-solid border-4 border-blue-300 rounded-md mb-2"
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formikLogin.handleChange}
                  value={formikLogin.values.password}
                  className="border-solid border-4 border-blue-300 rounded-md mb-2"
                />
                <br />
                <button
                  type="submit"
                  className="border-solid bg-blue-300 rounded-md"
                >
                  Login
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
