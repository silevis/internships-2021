export const persist = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const retrieveFromStore = (key: string): string | null => {
  return localStorage.getItem(key);
};
