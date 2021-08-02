import { useState } from 'react';
import { useFormik } from 'formik';
import { supabase } from '../../utils/supabase';
import { useUserUpdate, getUserInfo } from '../UserProvider';
import ModalDialog from '../universal/ModalDialog';
import { IProfile } from '../../interfaces/IProfile.interface';
import { errorToast, successToast, warningToast } from '../../utils/utils';

const LoginButton = () => {
  const setUser = useUserUpdate();
  const [loginModalShown, setLoginModalShown] = useState(false);

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
        errorToast(`Failed to log-in. Error: ${error.message}`, 'login-error');
        return;
      }

      if (user && setUser) {
        // TODO: get the default avatar directly from the supabase avatar store
        getUserInfo(user?.id).then(async (response) => {
          const userInfo = response?.[0];
          setUser({
            createdAt: userInfo?.createdAt ?? '',
            email: userInfo?.email ?? '',
            firstName: userInfo?.firstName ?? '',
            id: userInfo?.id ?? '',
            status: userInfo?.status ?? '',
            isAdmin: userInfo?.isAdmin ?? false,
            lastName: userInfo?.lastName ?? '',
          });
        });
        setLoginModalShown(!loginModalShown);
        successToast('Login successful', 'login-success');
      }
    },
  });

  const checkEmail = async () => {
    const { data } = await supabase
      .from<IProfile>('profiles')
      .select('email')
      .eq('email', formikLogin.values.emailAdress);
    if (!data?.length) {
      warningToast('There\'s no user associated with this email', 'login-no-email');
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
          </form>
        </ModalDialog>
      )}
    </div>
  );
};

export default LoginButton;
