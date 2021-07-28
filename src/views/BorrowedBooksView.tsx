import React, { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
import { useUser } from '../components/UserProvider';
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
  const loggedUser = useUser();

  useEffect(() => {
    const getBorrowedBooks = async () => {
      const { data } = await supabase
        .from<IBookProfileId>('borrowedBooks')
        .select('date, returnDate, book:books(*)')
        .eq('profileId', loggedUser?.id);
      if (data !== null) {
        setInfo(data);
      }
    };
    getBorrowedBooks();
  }, [loggedUser]);

  return (
    <div>
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
