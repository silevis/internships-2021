import React, { FC } from 'react';
import { toast } from 'react-toastify';
import supabase from '../utils/supabase';
import { IBookBorrow } from '../interfaces/IBookBorrow.interface';

const BorrowBook: FC<IBookBorrow> = ({ bookId, profileId, date, returnDate }) => {
  const AddOrNotify = async () => {
    if (supabase.auth.user()) {
      await supabase.from<IBookBorrow>('borrowedBooks').insert({
        bookId,
        profileId,
        date,
        returnDate,
      });
    } else {
      toast.warn('You should be logged in to borrow a book!', {
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
      <div>
        <button
          type="button"
          className="btn-page"
          onClick={AddOrNotify}
        >
          Borrow a book
        </button>

      </div>
    </div>
  );
};

export default BorrowBook;
