import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
import { IProfile } from '../interfaces/IProfile.interface';

type ProfileQuery = IProfile;

const useUserInfo = (id: string | null) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any | null>();
  useEffect(() => {
    if (!id) return;
    const getUser = async () => {
      // eslint-disable-next-line
      const { data: user, error } = await supabase
        .from<ProfileQuery>('profiles')
        .select(`
      *
    `).eq('id', id);
      if (user !== null) {
        setData(user);
      }
    };
    getUser();
  }, [id]);
  return id ? data : [null];
};

export default useUserInfo;
