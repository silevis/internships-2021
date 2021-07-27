import React, { useState } from 'react';
import { useFormik } from 'formik';
import { supabase } from '../utils/supabase';
import { IBasicUserInfo } from '../interfaces/IBasicUserInfo.interface';

const Register = () => {
  const [register, setRegister] = useState(false);
  const [emailValidator, setEmailValidator] = useState(false);
  const formikRegister = useFormik({
    initialValues: {
      emailAdress: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    // eslint-disable-next-line
    onSubmit: async (values) => {
      // eslint-disable-next-line
      const { user, error } = await supabase.auth.signUp({
        email: values.emailAdress,
        password: values.password,
      });
      if (user) {
        await supabase.from<IBasicUserInfo>('profiles').insert({
          id: user.id,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.emailAdress,
        });
      }
      setRegister(!register);
    },
  });
  const checkEmail = async () => {
      const { data } = await supabase
      .from<IBasicUserInfo>('profiles')
      .select('email')
      .eq('email', formikRegister.values.emailAdress);
      if (data?.length !== 0) {
        setEmailValidator(true);
      } else setEmailValidator(false);
    };

  return (
    <div>
      <div
        onClick={() => setRegister(!register)}
        className="btn-nav"
      >Sign Up
      </div>
      {register
        && (
          <div className="fixed left-0 top-0 pin z-50 overflow-auto bg-gray-600 bg-opacity-50 flex h-screen w-screen">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl">
              <div className="flex justify-between">
                <h1 className="font-bold">Register</h1>
                <button
                  type="button"
                  onClick={() => setRegister(!register)}
                  className="btn-exit"
                >
                  X
                </button>
              </div>
              <div>
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
                        className="p-1 placeholder-gray-400 text-gray-600 border outline-none mb-2"
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
                        className="p-1 placeholder-gray-400 text-gray-600 border outline-none"
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
                        className="p-1 placeholder-gray-400 text-gray-600 border outline-none mb-2"
                      />
                      {emailValidator && (
                      <p className="text-red-500">This email is already used</p>
                      )}
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
                        className="p-1 placeholder-gray-400 text-gray-600 border outline-none mb-2"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn-page"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Register;
