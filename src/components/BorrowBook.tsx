import React, { FC } from 'react';
import { toast } from 'react-toastify';
import supabase from '../utils/supabase';
import { IBookBorrow } from '../interfaces/IBookBorrow.interface';
import { IBook } from '../interfaces/IBook.interface';

interface IBookBorrowProps {
  bookId: string;
  profileId?: string;
  date: Date;
  returnDate: Date;
  quantity: number;
}
const BorrowBook: FC<IBookBorrowProps> = ({ bookId, profileId, date, returnDate, quantity }) => {
  const AddOrNotify = async () => {
    if (supabase.auth.user()) {
      if (quantity >= 0) {
        await supabase.from<IBookBorrow>('borrowedBooks').insert({
          bookId,
          profileId,
          date,
          returnDate,
        });
        await supabase.from<IBook>('books')
          .update({ quantity })
          .match({ id: bookId });
      } else {
        toast.error('We don\'t have this book in stock right now', {
          toastId: 'borrow-book-warning',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
      });
    }
  } else {
      toast.warn('You must be logged in to borrow a book!', {
        toastId: 'borrow-book-warning',
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      <button
        type="button"
        className="btn-page"
        onClick={AddOrNotify}
      >
        Borrow a book
      </button>
    </div>
  );
};

export default BorrowBook;
