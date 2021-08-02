import React, { FC } from 'react';
import { useFormik } from 'formik';
import ModalDialog from '../universal/ModalDialog';
import { supabase } from '../../utils/supabase';
import { IProfile } from '../../interfaces/IProfile.interface';
import { errorToast, successToast, warningToast } from '../../utils/utils';

interface IRegisterModalProps {
  onVisibilityChange: () => void,
  onSuccess: () => void,
}

const RegisterModal: FC<IRegisterModalProps> = ({ onSuccess, onVisibilityChange }) => {
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
      if (!values.firstName || !values.lastName) {
        errorToast('First Name and Last name are required fields', 'register-supabase-error');
        return;
      }
      if (error) {
        errorToast(error.message, 'register-supabase-error');
        return;
      }
      if (user) {
        await supabase.from<IProfile>('profiles').insert({
          id: user.id,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.emailAdress,
        }).then((resp) => {
          if (resp.status === 201) {
            successToast('Registered successfully!', 'register-success');
            onSuccess();
          } else {
            warningToast(resp.statusText, 'register-warning');
          }
        });
        onVisibilityChange();
      }
    },
  });

  const checkEmail = async () => {
    const { data } = await supabase
      .from<IProfile>('profiles')
      .select('email')
      .eq('email', formikRegister.values.emailAdress);

    if (data?.length) {
      warningToast('A user with this email address has already been registered', 'register-email-used');
    }
  };

  return (
    <ModalDialog
      title="Register"
      okButtonLabel="Sign Up"
      onOkButtonClick={() => formikRegister.submitForm()}
      onVisibilityChange={() => onVisibilityChange()}
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
      </form>
    </ModalDialog>
  );
};

export default RegisterModal;
