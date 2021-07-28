import React, { useEffect, useState } from 'react';
import Avatar from '../components/Avatar';
import EditUserComponent from '../components/EditUserComponent';
import { getUserAvatarURL, useUser } from '../components/UserProvider';
import { IBasicUserInfo } from '../interfaces/IBasicUserInfo.interface';
import './UserpageView.css';
// guard urla

const UserpageView = () => {
    const usr: IBasicUserInfo | null = useUser();
    const [avatarUrl, setAvatarLink] = useState('');
    const styleBg = {
        // eslint-disable-next-line max-len
        backgroundImage: 'url(https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg)',
    };

    useEffect(() => {
      (async () => {
          await getUserAvatarURL().then((data) => {
              if (data?.signedURL) {
                setAvatarLink(data?.signedURL);
              }
          });
      })();
  }, []);

    return (
      <div className="container mx-auto mt-16">
        <div className="h-32 bg-gray-500 bg-no-repeat bg-center" style={styleBg} />
        <div className="mx-16 bg-white relative -top-4 z-30">
          <div className="shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-1/4 relative h-24">
                <Avatar url={avatarUrl} className="relative -top-16 left-2" />
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
