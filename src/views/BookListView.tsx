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
    <div className="container mx-auto flex flex-row min-h-screen h-full">
      <Sidebar />
      <div className="mt-16">
        {data && data?.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        {data && data?.length < 1 && (
          <div> NIE MA </div>
        )}
      </div>
    </div>
  );
};

export default BookListView;
