import React, { FC, useContext, useState } from 'react';
import { IProfile } from '../interfaces/IProfile.interface';
import supabase from '../utils/supabase';

const UserContext = React.createContext<IProfile | null>(null);
const UserUpdateContext = React.createContext<((newUser: IProfile) => void) | null>(null);
const loggedUser = supabase.auth.user() ?? null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isAdmin = (user: any) => {
  return user?.isAdmin;
};

export const isLoggedIn = () => {
  // eslint-disable-next-line no-unneeded-ternary
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
