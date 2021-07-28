import React, { useState } from 'react';
import { useFormik } from 'formik';
import { supabase } from '../utils/supabase';
import ModalDialog from './ModalDialog';
import { IBasicUserInfo } from '../interfaces/IBasicUserInfo.interface';

const RegisterButton = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [status, setStatus] = useState<string>();
  const formikRegister = useFormik({
    initialValues: {
      emailAdress: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    onSubmit: async (values) => {
      const { user, error } = await supabase.auth.signUp({
        email: values.emailAdress,
        password: values.password,
      });
      if (error) {
        setStatus(error.message);
        return;
      }
      if (user) {
        await supabase.from<IBasicUserInfo>('profiles').insert({
          id: user.id,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.emailAdress,
        }).then((resp) => {
          setStatus(resp.statusText);
        });
        setModalVisibility(!modalVisibility);
      }
    },
  });
  const checkEmail = async () => {
    const { data } = await supabase
      .from<IBasicUserInfo>('profiles')
      .select('email')
      .eq('email', formikRegister.values.emailAdress);
    if (!data?.length) {
      setStatus('A user with this email address has already been registered');
    }
  };

  return (
    <div>
      <div className="btn-nav-end text-left relative">
        <button
          type="button"
          onClick={() => setModalVisibility(!modalVisibility)}
        >Sign Up
        </button>
      </div>
      {modalVisibility
        && (
          <ModalDialog
            title="Register"
            okButtonLabel="Sign Up"
            onOkButtonClick={() => formikRegister.submitForm()}
            onVisibilityChange={() => setModalVisibility(!modalVisibility)}
          >
            <form onSubmit={formikRegister.handleSubmit}>
              <div className="flex justify-between">
                <div>
                  <label htmlFor="firstName" className="text-xs block">First Name:</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={formikRegister.handleChange}
                    value={formikRegister.values.firstName}
                    className="input-pri"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-xs block">Last Name:</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={formikRegister.handleChange}
                    value={formikRegister.values.lastName}
                    className="input-pri"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label htmlFor="email-adress" className="text-xs block">Email adress:</label>
                  <input
                    id="emailAdress"
                    name="emailAdress"
                    type="email"
                    placeholder="Email-adress"
                    onChange={formikRegister.handleChange}
                    onBlur={checkEmail}
                    value={formikRegister.values.emailAdress}
                    className="input-pri"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-xs block">Password:</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formikRegister.handleChange}
                    value={formikRegister.values.password}
                    className="input-pri"
                  />
                </div>
              </div>
              <p className="text-red-500 mb-4">{status}</p>
            </form>
          </ModalDialog>
        )}
    </div>
  );
};

export default RegisterButton;
