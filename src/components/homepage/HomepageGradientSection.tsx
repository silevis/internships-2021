import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterModal from '../RegisterModal';
import './HomepageGradientSection.css';

const HomepageGradientSection = () => {
    const [registerModalShown, setRegisterModalShown] = useState(false);
    const history = useHistory();

    const onRegisterSuccess = () => {
      history.push('/books-list');
    };

    return (
      <section className="grid grid-cols-1 grid-rows-1 w-full home-dots-container h-40 mt-8">
        <div className="col-start-2 row-start-1 row-end-3 z-20 flex justify-center">
          <button
            className="p-4 px-12 bg-white border border-gray-500"
            type="button"
            onClick={() => setRegisterModalShown(!registerModalShown)}
          >
            Join us!
          </button>
          {!registerModalShown ? <></>
          : <RegisterModal onSuccess={() => onRegisterSuccess()} onVisibilityChange={() => setRegisterModalShown(!registerModalShown)} />}
        </div>
        <div className="col-start-1 row-start-2 row-end-4 col-span-full home-dots-gradient w-full bg-black" />
      </section>
    );
};

export default HomepageGradientSection;
