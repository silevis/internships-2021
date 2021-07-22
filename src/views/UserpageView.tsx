/* eslint-disable max-len */
import React, { useState } from 'react';
import EditUserComponent from '../components/EditUserComponent';
import { useUser } from '../components/UserContext';
import { IProfile } from '../interfaces/IProfile.interface';
import './UserpageView.css';
// guard urla

const UserpageView = () => {
    const usr: IProfile | null = useUser();
    // eslint-disable-next-line max-len
    const [avatarUrl] = useState('https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg');
    const styleBg = {
        backgroundImage: `url(${avatarUrl})`,
    };

    return (
      <div>
        <div className="h-32 bg-gray-500 bg-no-repeat bg-center" style={styleBg} />
        <div className="mx-16 bg-white relative -top-4 z-30">
          <div className="shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-1/4 relative h-24">
                <img className="w-32 h-32 rounded-full object-cover relative -top-16 left-2" src="https://poradyfit.pl/wp-content/uploads/2019/02/maxresdefault-1140x620.jpg" alt="Zdjęcie użytkownika" />
              </div>
              <div className="mt-2 w-1/2">
                <div className="flex uppercase">
                  <div className="w-min md:mr-2 first-l">{usr?.firstName}</div>
                  <div className="w-min first-l">{usr?.lastName}</div>
                </div>
              </div>
              <div className="text-gray-400 w-1/4 flex justify-end p-4">
                ROLA USERA
              </div>
            </div>
            <div className="p-2">
              <EditUserComponent />
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserpageView;
