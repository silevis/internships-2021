import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import supabase from '../utils/supabase';
import { IBook } from '../interfaces/IBook.interface';
import NoResults from '../components/booklists/NoResults';
import { PageExitAnimation } from '../components/App';
import { IProfile } from '../interfaces/IProfile.interface';
import BorrowedBook from '../components/booklists/BorrowedBook';
import Pagination from '../components/booklists/Pagination';

interface IBorrowedBookInfo {
  id: string;
  book: IBook;
  profile: IProfile;
  date: Date;
  returnDate: Date;
}
const BorrowedBooksView = () => {
  const [numberOfBooks, setNumberOfBooks] = useState<number | null>(10);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const onPageChange = (selectedPage: { selected: number }) => {
    setStartIndex(selectedPage.selected * 10);
    setEndIndex((selectedPage.selected * 10) + 9);
  };
  const [info, setInfo] = useState<null | IBorrowedBookInfo[]>([]);

  const getBorrowedBooks = useCallback(async () => {
    const { data } = await supabase
      .from<IBorrowedBookInfo>('borrowedBooks')
      .select('id, date, returnDate, book:books(*), profile:profiles(*)')
      .range(startIndex, endIndex);
    if (data !== null) {
      setInfo(data);
    }
  }, [startIndex, endIndex]);
  const getNumberOfBooks = useCallback(async () => {
    const { count } = await supabase
    .from<IBorrowedBookInfo>('borrowedBooks')
    .select('id', { count: 'exact' });
    setNumberOfBooks(count);
  }, []);
  useEffect(() => {
    getNumberOfBooks();
    getBorrowedBooks();
  }, [getBorrowedBooks, getNumberOfBooks]);

  return (
    <motion.div exit={PageExitAnimation}>
      <div className="container mx-auto py-1 shadow-inner">
        {info && info?.map((book) => (
          <BorrowedBook
            key={book.id}
            book={book.book}
            returnDate={book.returnDate}
            date={book.date}
            profile={book.profile}
          />
      ))}
        {info && info?.length < 1 && <NoResults />}
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

export default BorrowedBooksView;
