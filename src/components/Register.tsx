import React, { useState } from 'react'
import { useFormik } from 'formik';
import { supabase } from '../utils/supabase';
import { IProfile } from '../interfaces/IProfile.interface';

const Register = () => {
  const [register, setRegister] = useState(false);
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
        await supabase.from<IProfile>('profiles').insert({
          id: user.id,
          firstName: values.firstName,
          lastName: values.lastName,
        });
      }
    },
  });

  return (
    <div>
      <button type="button" onClick={() => setRegister(!register)} className="border-solid bg-red-300 rounded-md">Register</button>
      {register
        && (
          <div className="fixed top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl">
              <button type="button" onClick={() => setRegister(!register)} className="border-solid bg-red-300 rounded-md">Exit</button>
              <div>
                <form onSubmit={formikRegister.handleSubmit}>
                  <label htmlFor="email-adress">Email adress:</label>
                  <input
                    id="emailAdress"
                    name="emailAdress"
                    type="email"
                    placeholder="Email-adress"
                    onChange={formikRegister.handleChange}
                    value={formikRegister.values.emailAdress}
                    className="border-solid border-4 border-blue-300 rounded-md mb-2"
                  />
                  <br />
                  <label htmlFor="password">Password:</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formikRegister.handleChange}
                    value={formikRegister.values.password}
                    className="border-solid border-4 border-blue-300 rounded-md mb-2"
                  />
                  <br />
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={formikRegister.handleChange}
                    value={formikRegister.values.firstName}
                    className="border-solid border-4 border-blue-300 rounded-md mb-2"
                  />
                  <br />
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={formikRegister.handleChange}
                    value={formikRegister.values.lastName}
                    className="border-solid border-4 border-blue-300 rounded-md mb-2"
                  />
                  <br />
                  <button
                    type="submit"
                    onClick={() => setRegister(!register)}
                    className="border-solid bg-blue-300 rounded-md"
                  >
                    Register
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
