import React, { useState } from 'react';
import EditUserComponent from '../components/EditUserComponent';
// import { useUser } from '../components/UserContext';
// import { IProfile } from '../interfaces/IProfile.interface';

// guard urla
// pobieranie uid z jakiegos komponentu wyzej
// ostylowanie

const UserpageView = () => {
    // const usr: IProfile | null = useUser();
    // eslint-disable-next-line max-len
    const [avatarUrl] = useState('https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg');
    const styleBg = {
        backgroundImage: `url(${avatarUrl})`,
    };

    return (
      <div>
        <div className="h-32 bg-gray-500 bg-no-repeat bg-center" style={styleBg} />
        <div className="mx-16">
          <div className="shadow-md p-2">
            <EditUserComponent />
          </div>
        </div>
      </div>
    );
};

export default UserpageView;
