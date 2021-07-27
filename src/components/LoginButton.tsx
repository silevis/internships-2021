import { useState } from 'react';
import { useFormik } from 'formik';
import { supabase } from '../utils/supabase';
import { getUserAvatarURL, useUserUpdate } from './UserContext';
import { IProfile } from '../interfaces/IProfile.interface';
import ModalDialog from './ModalDialog';

const LoginButton = () => {
  const setUser = useUserUpdate();
  const [loginModalShown, setLoginModalShown] = useState(false);
  const [emailValidator, setEmailValidator] = useState(false);
  const formikLogin = useFormik({
    initialValues: {
      emailAdress: '',
      password: '',
    },
    onSubmit: async (values) => {
      // eslint-disable-next-line
      const { user, error } = await supabase.auth.signIn({
        email: values.emailAdress,
        password: values.password,
      });
      setLoginModalShown(!loginModalShown);
      if (user && setUser) {
        // TODO: get the default avatar directly from the supabase avatar store
        setUser({
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
    setEmailValidator(data?.length === 0);
  };

  return (
    <div>
      <div
        onClick={() => setLoginModalShown(!loginModalShown)}
        className="btn-nav"
      >Sign In
      </div>
      {loginModalShown && (
      <ModalDialog title="Login" onVisibilityChange={() => setLoginModalShown(!loginModalShown)}>
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
                className="input-pri"
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
                className="input-pri"
              />
            </div>
          </div>
          <button type="submit" className="btn-page">
            Sign In
          </button>
        </form>
      </ModalDialog>
)}
    </div>
  );
};

export default LoginButton;
