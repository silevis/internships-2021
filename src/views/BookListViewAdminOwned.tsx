import React, { useState, useEffect } from 'react';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import OwnedBook from '../components/OwnedBook';

const BookListViewAdminOwned = () => {
  const [dataSupabase, setDataSupabase] = useState<IBook[] | null>([]);

  const getAllBooks = async () => {
    const { data: books } = await supabase
      .from<IBook>('books')
      .select('*');
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
        <OwnedBook
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

export default BookListViewAdminOwned;
