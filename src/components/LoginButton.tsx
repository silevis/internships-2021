import { useState } from 'react';
import { useFormik } from 'formik';
import { supabase } from '../utils/supabase';
import { getUserAvatarURL, useUserUpdate, getUserInfo } from './UserContext';
import ModalDialog from './ModalDialog';
import { IBasicUserInfo } from '../interfaces/IBasicUserInfo.interface';

const LoginButton = () => {
  const setUser = useUserUpdate();
  const [loginModalShown, setLoginModalShown] = useState(false);
  const [status, setStatus] = useState<string>();

  const formikLogin = useFormik({
    initialValues: {
      emailAdress: '',
      password: '',
    },
    onSubmit: async (values) => {
      const { user, error } = await supabase.auth.signIn({
        email: values.emailAdress,
        password: values.password,
      });
      if (error) {
        setStatus(error.message);
        return;
      }

      if (user && setUser) {
        // TODO: get the default avatar directly from the supabase avatar store
        getUserInfo(user?.id).then(async (response) => {
          const testUser = response?.[0];

          setUser({
            id: testUser?.id ?? '',
            firstName: testUser?.firstName ?? 'unknown',
            lastName: testUser?.lastName ?? 'unknown',
            email: testUser?.email ?? 'no email',
            avatarUrl: (await getUserAvatarURL())?.signedURL
              ?? `${process.env.PUBLIC_URL}/image-not-found.png`,
          });
        });
        setLoginModalShown(!loginModalShown);
        setStatus('');
      }
    },
  });

  const checkEmail = async () => {
    const { data } = await supabase
      .from<IBasicUserInfo>('profiles')
      .select('email')
      .eq('email', formikLogin.values.emailAdress);
    if (!data?.length) {
      setStatus('There\'s no user associated with this email');
    }
  };

  return (
    <div>
      <div className="btn-nav text-left relative">
        <button
          type="button"
          onClick={() => setLoginModalShown(!loginModalShown)}
        >
          Sign In
        </button>
      </div>
      {loginModalShown && (
        <ModalDialog
          title="Login"
          okButtonLabel="Sign In"
          onOkButtonClick={() => formikLogin.submitForm()}
          onVisibilityChange={() => setLoginModalShown(!loginModalShown)}
        >
          <form onSubmit={formikLogin.handleSubmit}>
            <div className="flex content-between">
              <div className="mr-1 flex-auto">
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
              </div>
              <div className="flex flex-auto flex-col items-end">
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
            </div>
            <p className="text-red-500 mb-4">{status}</p>
          </form>
        </ModalDialog>
      )}
    </div>
  );
};

export default LoginButton;
