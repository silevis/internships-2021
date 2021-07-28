import { useCallback } from 'react';
import supabase from '../utils/supabase';
import { IProfile } from '../interfaces/IProfile.interface';
import useSupaBase from './useSupaBase';

type ProfileQuery = IProfile;

const useProfile = (id: string) => {
  const supabaseQuery = useCallback(async () => {
    return supabase
      .from<ProfileQuery>('profiles')
      .select(`
        *
      `)
      .eq('id', id);
  }, [
    id,
  ]);

  return useSupaBase(supabaseQuery);
};

export default useProfile;
