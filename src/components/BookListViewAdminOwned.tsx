import React, { useState, useEffect } from 'react';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import StoreBook from './StoreBook';

const BookListViewAdmin = () => {
  const [dataSupabase, setDataSupabase] = useState<IBook[] | null>([]);

  const getAllBooks = async () => {
    // eslint-disable-next-line
    const { data: books, error } = await supabase
      .from<IBook>('books')
      .select(`
    *
  `);
    if (books !== null) {
      setDataSupabase(books);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <div>
      {dataSupabase && dataSupabase?.map((book) => (
        <StoreBook
          key={book.id}
          id={book.id}
          title={book.title}
          image={book.imageLinks[0]}
          isbn={book.isbn}
          authors={book.authors}
          publishedDate={book.publishedDate}
          categories={book.categories}
          description={book.description}
          quantity={book.quantity}
          onBookDelete={getAllBooks}
        />
        ))}
    </div>
  );
};

export default BookListViewAdmin;
