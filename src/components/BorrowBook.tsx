import React, { FC } from 'react';
import supabase from '../utils/supabase';
import { IBookBorrow } from '../interfaces/IBookBorrow.interface';
import { IBook } from '../interfaces/IBook.interface';
import { errorToast, successToast, warningToast } from '../utils/utils';

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
        successToast('Book borrowed successfully!', 'borrow-book-success');
      } else {
        errorToast('We don\'t have this book in stock right now', 'borrow-book-warning');
      }
    } else {
      warningToast('You must be logged in to borrow a book!', 'borrow-book-warning');
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
