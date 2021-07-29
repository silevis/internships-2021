import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import Book from '../components/Book';
import Sidebar from '../components/Sidebar';

interface IParams {
  q: string;
  rating: string;
}

const BookListView = () => {
  const [data, setData] = useState<IBook[] | null>([]);
  const params: IParams = useParams();
  const { rating } = params;
  useEffect(() => {
    if (params?.q?.length < 1) params.q = '*';
    const getAllBooks = async () => {
      const q = `%${params.q ? params.q : '*'}%`;
      const { data: books } = await supabase
        .from<IBook>('books')
        .select('*')
        .ilike('title', q)
        .gte('avgRating', rating);
      if (books !== null) {
        setData(books);
      }
    };
    getAllBooks();
  }, [params, rating]);
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
