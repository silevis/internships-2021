/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import RegisterModal from './RegisterModal';

const RegisterButton = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <div className="dark:text-white">
      <div className="btn-nav-end text-left relative">
        <button
          type="button"
          onClick={() => setModalVisibility(!modalVisibility)}
        >Sign Up
        </button>
      </div>
      {modalVisibility && <RegisterModal onSuccess={() => { }} onVisibilityChange={() => setModalVisibility(!modalVisibility)} />}
    </div>
  );
};

export default RegisterButton;
