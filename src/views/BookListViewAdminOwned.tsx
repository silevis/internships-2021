import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import OwnedBook from '../components/OwnedBook';
import { PageExitAnimation } from '../components/App';

const BookListViewAdmin = () => {
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
    <motion.div exit={PageExitAnimation}>
      <div className="container w-full h-full max-w-8xl mx-auto flex mt-3">
        <div className="min-w-0 w-full pt-3 flex-auto lg:static lg:max-h-full lg:overflow-visible shadow-inner">
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
      </div>
    </motion.div>
  );
};
export default BookListViewAdmin;
