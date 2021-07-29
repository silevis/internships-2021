import React, { FC, useState } from 'react';
import { IBook } from '../interfaces/IBook.interface';
import { supabase } from '../utils/supabase';
import { errorToast } from '../utils/utils';

interface IBookReturnProps {
  id?: string;
  bookId: string;
  quantity: number;
  title: string;
  onBookReturn: () => void;
}
const ReturnBook: FC<IBookReturnProps> = ({ id, bookId, quantity, onBookReturn, title }) => {
  const [modal, setModal] = useState(false);
  const Return = async () => {
    const { error } = await supabase
      .from('borrowedBooks')
      .delete()
      .match({ id });
      await supabase.from<IBook>('books')
      .update({ quantity })
      .match({ id: bookId });
    if (error) errorToast('There was a problem with returning this book!', 'return-book-error');
    onBookReturn();
  };
  return (
    <div>
      <button
        type="button"
        className="btn-page"
        onClick={() => setModal(true)}
      >
        - Return Book
      </button>
      {modal && (
        <div
          className="fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen"
          onClick={() => setModal(false)}
        >
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl">
            <p>Are you sure you want to return this book &quot;{title}&quot;?</p>
            <button
              type="button"
              className="btn-page"
              onClick={Return}
            >
              - Retrun Book
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReturnBook;
