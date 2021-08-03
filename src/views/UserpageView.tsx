import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Avatar from '../components/userpage/Avatar';
import EditUserComponent from '../components/userpage/EditUserComponent';
import { getUserAvatarURL, isAdmin, useUser } from '../components/UserProvider';
import { IProfile } from '../interfaces/IProfile.interface';
import './UserpageView.css';
import { PageExitAnimation } from '../components/App';

const UserpageView = () => {
  /**
   * Nie ma potrzeby typowania zmiennych jeśli funckja, która zwraca dane jest poprawnie otypowana jak ponizej
   */
  const usr = useUser();
  /**
   * rozbiezne nazwy zmiennych wyciągniete z useState - raz url - potem link
   */
  const [avatarUrl, setAvatarLink] = useState('');
  const styleBg = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/userpage-background.jpg)`,
  };

  useEffect(() => {
    (async () => setAvatarLink(await getUserAvatarURL()))();
  }, []);

  return (
    <motion.div exit={PageExitAnimation}>
      <div className="container mx-auto">
        <div className="h-32 bg-gray-500 bg-no-repeat bg-center object-contain" style={styleBg} />
        <div className="mx-16 bg-white relative -top-4 z-30">
          <div className="shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="w-1/4 relative h-24">
                <Avatar url={avatarUrl} className="relative -top-16 left-2 shadow" />
              </div>
              <div className="mt-2 w-1/2">
                <div className="flex uppercase">
                  <div className="w-min md:mr-2 first-l">{usr?.firstName}</div>
                  <div className="w-min first-l">{usr?.lastName}</div>
                </div>
              </div>
              <div className="text-gray-400 w-1/4 flex justify-end p-4">
                {isAdmin(useUser()) ? 'Administrator' : 'User'}
              </div>
            </div>
            <div className="p-2">
              {/*
                TODO
                przy duzych komponentach przekazywanie funckji do wnetrza komponentu powoduje jej ponowne utworzenie
                a co za tym idzie React nie moze memoizowac komponentow, do tego celu najlepiej uzyc hooka useCallback
               */}
              <EditUserComponent
                onAvatarChange={async () => setAvatarLink(await getUserAvatarURL())}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserpageView;
