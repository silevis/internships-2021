import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import supabase from '../utils/supabase';
import { useUser } from '../components/UserProvider';
import { IBook } from '../interfaces/IBook.interface';
import BorrowedBook from '../components/booklists/BorrowedBook';
import NoResults from '../components/booklists/NoResults';
import { PageExitAnimation } from '../components/App';

interface IBookProfileId {
  book: IBook;
  id: string;
  date: Date;
  returnDate: Date;
  profileId: string | undefined;
}
const BorrowedBooksView = () => {
  const [info, setInfo] = useState<null | IBookProfileId[]>([]);
  const user = useUser();

  const getBorrowedBooks = useCallback(async () => {
    const { data } = await supabase
      .from<IBookProfileId>('borrowedBooks')
      .select('id, date, returnDate, book:books(*)')
      .eq('profileId', user?.id);
    if (data !== null) {
      setInfo(data);
    }
  }, [user]);

  useEffect(() => {
    getBorrowedBooks();
  }, [getBorrowedBooks]);

  return (
    <motion.div exit={PageExitAnimation}>
      <div className="container mx-auto py-1 shadow-inner">
        {info && info?.map((book) => (
          <BorrowedBook
            key={book.book.id}
            book={book.book}
            returnDate={book.returnDate}
            date={book.date}
            id={book.id}
            onBookReturn={getBorrowedBooks}
          />
      ))}
        {info && info?.length < 1 && <NoResults />}
      </div>
    </motion.div>
  );
};

export default BorrowedBooksView;
