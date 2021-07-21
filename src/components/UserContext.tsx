import React, { FC, useContext, useState } from 'react';
import { IProfile } from '../interfaces/IProfile.interface';

const UserContext = React.createContext<IProfile | null>(null);
const UserUpdateContext = React.createContext<((newUser: IProfile) => void) | null>(null);

export const useUser = () => {
  return useContext(UserContext);
};

export const useUserUpdate = () => {
  return useContext(UserUpdateContext);
};

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IProfile>({
    id: '',
    firstName: '',
    lastName: '',
  });

  const toggleUser = (newUser: IProfile) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={toggleUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};
