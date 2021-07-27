import React, { FC, useContext, useState } from 'react';
import { IBasicUserInfo } from '../interfaces/IBasicUserInfo.interface';
import { IProfile } from '../interfaces/IProfile.interface';
import supabase from '../utils/supabase';

const UserContext = React.createContext<IBasicUserInfo | null>(null);
const UserUpdateContext = React.createContext<((newUser: IBasicUserInfo) => void) | null>(null);
const loggedUser = supabase.auth.user() ?? null;

export const isAdmin = (user: IProfile | null) => {
  return user?.isAdmin;
};

export const isLoggedIn = () => {
  return supabase.auth.user();
};

export const useUser = () => {
  return useContext(UserContext);
};

export const useUserUpdate = () => {
  return useContext(UserUpdateContext);
};

export async function getUserAvatarURL() {
  if (!loggedUser) {
    return undefined;
  }
  return supabase
    .storage
    .from('images/avatars')
    .createSignedUrl(`${loggedUser?.id}`, 43200);
}

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IBasicUserInfo>({
    id: loggedUser?.id ?? '',
    firstName: '',
    lastName: '',
    email: loggedUser?.email ?? '',
    avatarUrl: '',
  });

  const toggleUser = (newUser: IBasicUserInfo) => {
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
