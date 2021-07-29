import React, { FC, useContext, useState } from 'react';
import { IBasicUserInfo } from '../interfaces/IBasicUserInfo.interface';
import { IProfile } from '../interfaces/IProfile.interface';
import supabase from '../utils/supabase';

const UserContext = React.createContext<IBasicUserInfo | null>(null);
const UserUpdateContext = React.createContext<((newUser: IBasicUserInfo) => void) | null>(null);
let loggedUser = supabase.auth.user() ?? null;

export const getUserInfo = async (uId: string) => {
  const { data } = await supabase
    .from<IProfile>('profiles')
    .select(`
      *
    `).eq('id', uId ?? '');
  return data;
};

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

export const getUserAvatarURL = async () => {
  if (!loggedUser) {
    return undefined;
  }
  return supabase
    .storage
    .from('images/avatars')
    .createSignedUrl(`${loggedUser?.id}`, 43200);
};

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IBasicUserInfo | null>(null);
  loggedUser = supabase.auth.user();

  if (!user) {
    getUserInfo(loggedUser?.id ?? '').then((response) => {
      const testUser = response?.[0];
      setUser({
        id: testUser?.id ?? '',
        firstName: testUser?.firstName ?? '',
        lastName: testUser?.lastName ?? '',
        email: testUser?.email ?? '',
        avatarUrl: '',
      });
    });
  }

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
