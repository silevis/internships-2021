import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import supabase from '../utils/supabase';
import { useUser } from '../components/UserProvider';
import { IBook } from '../interfaces/IBook.interface';
import UserBook from '../components/booklists/UserBook';
import NoResults from '../components/booklists/NoResults';
import { PageExitAnimation } from '../components/App';
import Pagination from '../components/booklists/Pagination';

interface IBookProfileId {
  book: IBook;
  id: string;
  date: Date;
  returnDate: Date;
  profileId: string | undefined;
}
const UserBooksView = () => {
  const [numberOfBooks, setNumberOfBooks] = useState<number | null>(10);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const onPageChange = (selectedPage: { selected: number }) => {
    setStartIndex(selectedPage.selected * 10);
    setEndIndex((selectedPage.selected * 10) + 9);
  };
  const [info, setInfo] = useState<null | IBookProfileId[]>([]);
  const user = useUser();

  const getBorrowedBooks = useCallback(async () => {
    const { data } = await supabase
      .from<IBookProfileId>('borrowedBooks')
      .select('id, date, returnDate, book:books(*)')
      .eq('profileId', user?.id)
      .range(startIndex, endIndex);
      if (data !== null) {
      setInfo(data);
    }
  }, [user, endIndex, startIndex]);
  const getNumberOfBooks = useCallback(async () => {
    const { count } = await supabase
    .from<IBookProfileId>('borrowedBooks')
    .select('id', { count: 'exact' })
    .eq('profileId', user?.id);
    setNumberOfBooks(count);
  }, [user]);
  useEffect(() => {
    getNumberOfBooks();
    getBorrowedBooks();
  }, [getBorrowedBooks, getNumberOfBooks]);

  return (
    <motion.div exit={PageExitAnimation}>
      <div className="container mx-auto py-1 shadow-inner">
        {info && info?.map((book) => (
          <UserBook
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

export default UserBooksView;
