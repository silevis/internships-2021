import { useCallback } from 'react';
import supabase from '../utils/supabase';
import { IUser } from '../interfaces/IUser.interface';
import useSupaBase from './useSupaBase';

type EmployeeQuery = IUser;

const useUser = (id: string) => {
  // eslint-disable-next-line space-before-function-paren
  const supabaseQuery = useCallback(async () => {
    return supabase
      .supabase
      .from<EmployeeQuery>('employee')
      .select(`
        *
      `)
      .eq('id', id);
  }, [
    id,
  ]);

  return useSupaBase(supabaseQuery);
};

export default useUser;
