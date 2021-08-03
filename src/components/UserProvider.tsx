import React, { FC, useContext, useState } from 'react';
import { IProfile } from '../interfaces/IProfile.interface';
import supabase from '../utils/supabase';
import { DefaultUserAvatarUrl } from '../utils/utils';

const UserContext = React.createContext<IProfile | null>(null);
const UserUpdateContext = React.createContext<((newUser: IProfile) => void) | null>(null);

/**
 * TODO lepiej korzystać z operatora || niz ?? - trzeba znać róznice między nimi
 */
let loggedInUser = supabase.auth.user() ?? null;

export const getUserInfo = async (uid: string) => {
  if (!uid) {
    return null;
  }
  const { data } = await supabase
    .from<IProfile>('profiles')
    .select(`
      *
    `).eq('id', uid ?? '');
  return data;
};

export const isAdmin = (user: IProfile | null) => {
  return user?.isAdmin;
};

/**
 * TODO funkcje rozpoczynające się na isXxxx powinny zwracać boolean
 */
export const isLoggedIn = () => {
  return supabase.auth.user();
};

export const useUser = (): any => {
  return useContext(UserContext);
};

export const useUserUpdate = () => {
  return useContext(UserUpdateContext);
};

export const getUserAvatarURL = async () => {
  if (!loggedInUser) {
    return DefaultUserAvatarUrl;
  }
  const { signedURL } = await supabase
    .storage
    .from('images/avatars')
    .createSignedUrl(`${loggedInUser?.id}`, 43200);
  return signedURL ?? DefaultUserAvatarUrl;
};

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IProfile | null>(null);
  loggedInUser = supabase.auth.user();

  if (!user) {
    getUserInfo(loggedInUser?.id ?? '').then((response) => {
      const userInfo = response?.[0];
      setUser({
        createdAt: userInfo?.createdAt ?? '',
        email: userInfo?.email ?? '',
        firstName: userInfo?.firstName ?? '',
        id: userInfo?.id ?? '',
        isAdmin: userInfo?.isAdmin ?? false,
        lastName: userInfo?.lastName ?? '',
      });
    });
  }

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
