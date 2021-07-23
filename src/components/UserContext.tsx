import React, { FC, useContext, useState } from 'react';
import { IProfile } from '../interfaces/IProfile.interface';
import supabase from '../utils/supabase';

const UserContext = React.createContext<IProfile | null>(null);
const UserUpdateContext = React.createContext<((newUser: IProfile) => void) | null>(null);
const loggedUser = supabase.auth.user() ?? null;

export const useUser = () => {
  return useContext(UserContext);
};

export const useUserUpdate = () => {
  return useContext(UserUpdateContext);
};

export async function getUserAvatarURL() {
  if (loggedUser === null) {
    return undefined;
  }
  return supabase
    .storage
    .from('images/avatars')
    .createSignedUrl(`${loggedUser?.id}`, 43200);
}

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IProfile>({
    id: loggedUser?.id ?? '',
    firstName: '',
    lastName: '',
    email: loggedUser?.email ?? '',
    avatarUrl: '',
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
