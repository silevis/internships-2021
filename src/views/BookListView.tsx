import React, { useState, useEffect } from 'react';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import Book from '../components/Book';

const BookListView = () => {
  const [data, setData] = useState<IBook[] | null>([]);

  useEffect(() => {
    // eslint-disable-next-line
    const getAllBooks = async () => {
      // eslint-disable-next-line
      const { data: books, error } = await supabase
        .from<IBook>('books')
        .select(`
      *
    `);
      if (books !== null) {
        setData(books);
      }
    };
    getAllBooks();
  }, []);
  return (
    <div>
      {data && data?.map((book) => (
        <Book
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
    </div>
  );
};

export default BookListView;
