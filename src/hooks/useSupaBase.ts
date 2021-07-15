import { useCallback, useEffect, useState } from 'react';

type Status = 'idle' | 'pending' | 'success' | 'error';

const useSupaBase = <R = unknown>(
  asyncFunction: (...args: unknown[]) => Promise<R>,
): {
  status: Status,
  response: R | null,
  error: unknown,
} => {
  const [status, setStatus] = useState<Status>('idle');
  const [response, setResponse] = useState<R | null>(null);
  const [error, setError] = useState<unknown>(undefined);

  // eslint-disable-next-line space-before-function-paren
  const execute = useCallback(async () => {
    setStatus('pending');
    setResponse(null);
    setError(null);
    try {
      setResponse(await asyncFunction());
      setStatus('success');
    } catch (err) {
      setError(err);
      setStatus('error');
    }
  }, [asyncFunction]);

  useEffect(() => {
    execute();
  }, [execute]);

  return { status, response, error };
};

export default useSupaBase;
