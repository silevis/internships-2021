import { useState } from 'react';
import { useFormik } from 'formik';
import { supabase } from '../utils/supabase';
import { getUserAvatarURL, useUserUpdate } from './UserContext';
import { IProfile } from '../interfaces/IProfile.interface';

const Login = () => {
  const setUser = useUserUpdate();
  const [login, setLogin] = useState(false);
  const [emailValidator, setEmailValidator] = useState(false);
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
        // TODO: get the default avatar directly from the supabase avatar store
        // eslint-disable-next-line no-unused-expressions
        setUser && setUser({
          id: user?.id,
          firstName: 'unknown',
          lastName: 'unknown',
          email: user?.email ?? 'no email',
          avatarUrl: (await getUserAvatarURL())?.signedURL
            ?? `${process.env.PUBLIC_URL}/image-not-found.png`,
        });
      }
    },
  });

  const checkEmail = async () => {
    const { data } = await supabase
    .from<IProfile>('profiles')
    .select('email')
    .eq('email', formikLogin.values.emailAdress);
    if (data?.length === 0) {
      setEmailValidator(true);
    } else setEmailValidator(false);
  };

  return (
    <div>
      <div
        onClick={() => setLogin(!login)}
        className="btn-nav"
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
                className="btn-exit"
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
                      onBlur={checkEmail}
                      value={formikLogin.values.emailAdress}
                      className="p-1 placeholder-gray-400 text-gray-600 border outline-none mb-2"
                    />
                    {emailValidator && (
                      <p className="text-red-500">This email doesn&#39;t exist in our database</p>
                      )}
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
                  className="btn-page"
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
