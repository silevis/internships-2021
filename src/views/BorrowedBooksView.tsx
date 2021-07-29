import React, { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
import { useUser } from '../components/UserContext';
import { IBook } from '../interfaces/IBook.interface';
import BorrowedBook from '../components/BorrowedBook';

interface IBookProfileId {
  book: IBook;
  date: Date;
  returnDate: Date;
  profileId: string | undefined;
}
const BorrowedBooksView = () => {
  const [info, setInfo] = useState<null | IBookProfileId[]>([]);
  const user = useUser();

  useEffect(() => {
    const getBorrowedBooks = async () => {
      const { data } = await supabase
        .from<IBookProfileId>('borrowedBooks')
        .select('date, returnDate, book:books(*)')
        .eq('profileId', user?.id);
      if (data !== null) {
        setInfo(data);
      }
    };
    getBorrowedBooks();
  }, [user]);

  return (
    <div className="container mx-auto mt-3 py-1 shadow-inner">
      {info && info?.map((book) => (
        <BorrowedBook key={book.book.id} book={book.book} returnDate={book.returnDate} date={book.date} />
      ))}
      {info && info?.length < 1 && (
        <div> NIE MA </div>
      )}
    </div>
  );
};

export default BorrowedBooksView;
