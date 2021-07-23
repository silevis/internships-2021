import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import Book from '../components/Book';

const BookListView = () => {
  const [data, setData] = useState<IBook[] | null>([]);
  // eslint-disable-next-line
  const params: any = useParams();
  const { rating } = params;
  // eslint-disable-next-line
  useEffect(() => {
      if (params?.q.lenght < 1) params.q = '*';
      let range = 0.99;
      if (rating < 1) range = 10;
      const getAllBooks = async () => {
      const q = `%${params.q ? params.q : '*'}%`;
      const { data: books } = await supabase
        .from<IBook>('books')
        .select('*')
        .ilike('title', q)
        .gte('avgRating', rating)
        .lte('avgRating', rating + range);
        if (books !== null) {
          setData(books);
        }
    };
    getAllBooks();
  }, [params]);
  return (
    <div>
      {data && data?.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          image={book.imageLinks[0]}
          isbn={book.isbn}
          authors={book.authors}
          publishedDate={book.publishedDate}
          categories={book.categories}
          description={book.description}
        />
      ))}
      {data && data?.length < 1 && (
        <div> NIE MA </div>
      )}
    </div>
  );
};

export default BookListView;
