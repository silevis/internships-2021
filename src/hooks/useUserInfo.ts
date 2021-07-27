import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
import { IProfile } from '../interfaces/IProfile.interface';

const useUserInfo = (id: string | null) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<IProfile[] | null>();

  useEffect(() => {
    if (!id) return;
    const getUser = async () => {
      // eslint-disable-next-line
      const { data: user, error } = await supabase
        .from<IProfile>('profiles')
        .select(`
      *
    `).eq('id', id);
      setData(user);
    };
    getUser();
  }, [id]);

  if (data?.[0]?.id !== id) {
    return null;
  }

  return id ? data?.[0] : null;
};

export default useUserInfo;
