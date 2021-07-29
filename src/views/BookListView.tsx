import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import Book from '../components/Book';
import Sidebar, { getFilterType } from '../components/Sidebar';

interface IParams {
  q: string;
  rating: string;
}

const checkAuthors = (authors: string[], query: string) => {
  let matched = false;
  if (query === '*') return true;
  authors?.forEach((author) => {
    if (author.toLowerCase().includes(query.toLowerCase())) matched = true;
  });
  return matched;
};

const BookListView = () => {
  const [data, setData] = useState<IBook[] | null>([]);
  const params: IParams = useParams();
  useEffect(() => {
    if (params?.q?.length < 1) params.q = '*';
    const getAllBooks = async () => {
      const q = `%${params.q ? params.q : '*'}%`;
      if (getFilterType() === 'title') {
        const { data: books } = await supabase
          .from<IBook>('books')
          .select('*')
          .ilike('title', q)
          .gte('avgRating', params.rating);
        setData(books);
      } else if (getFilterType() === 'authors') {
        const { data: books } = await supabase
          .from<IBook>('books')
          .select('*');

        const x = books?.filter((book) => checkAuthors(book?.authors, params.q)) ?? [];
        setData(x);
      }
    };
    getAllBooks();
  }, [params]);
  return (
    <div className="content-container">
      <Sidebar />
      <div className="mt-3 w-full shadow-inner">
        {data && data?.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        {data && data?.length < 1 && (
          <div className="flex justify-center italic">No results</div>
        )}
      </div>
    </div>
  );
};

export default BookListView;
