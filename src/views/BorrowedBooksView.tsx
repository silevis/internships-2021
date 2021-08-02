import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import supabase from '../utils/supabase';
import { IBook } from '../interfaces/IBook.interface';
import NoResults from '../components/booklists/NoResults';
import { PageExitAnimation } from '../components/App';
import { IProfile } from '../interfaces/IProfile.interface';
import BorrowedBook from '../components/booklists/BorrowedBook';

interface IBorrowedBookInfo {
  id: string;
  book: IBook;
  profile: IProfile;
  date: Date;
  returnDate: Date;
}
const BorrowedBooksView = () => {
  const [info, setInfo] = useState<null | IBorrowedBookInfo[]>([]);

  const getBorrowedBooks = useCallback(async () => {
    const { data } = await supabase
      .from<IBorrowedBookInfo>('borrowedBooks')
      .select('id, date, returnDate, book:books(*), profile:profiles(*)');
    if (data !== null) {
      setInfo(data);
    }
  }, []);

  useEffect(() => {
    getBorrowedBooks();
  }, [getBorrowedBooks]);

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
    </motion.div>
  );
};

export default BorrowedBooksView;
