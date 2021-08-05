import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import Pagination from '../components/booklists/Pagination';
import OwnedBook from '../components/booklists/OwnedBook';
import { PageExitAnimation } from '../components/App';

const BookListViewAdminOwned = () => {
  const [numberOfBooks, setNumberOfBooks] = useState<number | null>(10);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const onPageChange = (selectedPage: { selected: number }) => {
    setStartIndex(selectedPage.selected * 10);
    setEndIndex((selectedPage.selected * 10) + 9);
  };
  const [dataSupabase, setDataSupabase] = useState<IBook[] | null>([]);
  const getAllBooks = useCallback(async () => {
    const { data: books } = await supabase
      .from<IBook>('books')
      .select('*')
      .range(startIndex, endIndex);
    if (books !== null) {
      setDataSupabase(books);
    }
  }, [endIndex, startIndex]);
  const getNumberOfBooks = useCallback(async () => {
    const { count } = await supabase
    .from<IBook>('books')
    .select('id', { count: 'exact' });
    setNumberOfBooks(count);
  }, []);
  useEffect(() => {
    getNumberOfBooks();
    getAllBooks();
  }, [getAllBooks, getNumberOfBooks]);
  return (
    <motion.div exit={PageExitAnimation}>
      <div className="container w-full h-full max-w-8xl mx-auto flex">
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
      <div className="flex flex-row w-full justify-center mb-2 text-xl">
        <Pagination
          count={numberOfBooks || 10}
          pageSize={10}
          currentPage={startIndex / 10}
          onPageChange={onPageChange}
        />
      </div>
    </motion.div>
  );
};
export default BookListViewAdminOwned;
