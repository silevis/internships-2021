import React, { useState, useEffect, useCallback } from 'react';
import supabase from '../utils/supabase';
import { useUser } from '../components/UserContext';
import { IBook } from '../interfaces/IBook.interface';
import BorrowedBook from '../components/BorrowedBook';

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
    <div className="container mx-auto mt-3 py-1 shadow-inner">
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
      {info && info?.length < 1 && (
        <div> NIE MA </div>
      )}
    </div>
  );
};

export default BorrowedBooksView;
