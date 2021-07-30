import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';

const isMatching = (items: string[], query: string, fullMatch = false) => {
  let matched = false;
  if (query === '*') return true;
  items?.forEach((item) => {
    if (fullMatch && (item.toLowerCase() === query.toLowerCase())) matched = true;
    else if (item.toLowerCase().includes(query.toLowerCase())) matched = true;
  });
  return matched;
};

export const filterByTitle = async (query:string, rating:string, cat:string) => {
  let q = `%${query}%`;
  if (query.length < 1) q = '*';
  const { data: books } = await supabase
    .from<IBook>('books')
    .select('*')
    .ilike('title', q)
    .gte('avgRating', rating);
  const y = books?.filter((book) => isMatching(book?.categories, cat, true)) ?? [];
  return y;
};

export const filterByAuthor = async (query:string, rating:string, cat:string) => {
  let q = query;
  if (query.length < 1) q = '*';
  const { data: books } = await supabase
          .from<IBook>('books')
          .select('*')
          .gte('avgRating', rating);
  const x = books?.filter((book) => isMatching(book.authors, q)) ?? [];
  const y = x?.filter((book) => isMatching(book?.categories, cat, true)) ?? [];
  return y;
};

export const getCategories = async () => {
  const { data: categories } = await supabase
          .from<IBook>('books')
          .select('categories');

  const all: string[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const flattened = categories?.map((cat: any) => cat.categories);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  flattened?.forEach((cat: any[]) => (!(all.includes(cat[0])) && all.push(cat[0])));

  return all;
};
