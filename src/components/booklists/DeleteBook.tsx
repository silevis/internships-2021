import React, { FC, useState } from 'react';
import { supabase } from '../../utils/supabase';
import { errorToast } from '../../utils/utils';

interface IBookProps {
  id?: string;
  title?: string;
  onBookDelete: () => void;
}
const DeleteBook: FC<IBookProps> = ({ id, onBookDelete, title }) => {
  const [modal, setModal] = useState(false);
  const Delete = async () => {
    const { error } = await supabase
      .from('books')
      .delete()
      .match({ id });
    if (error) errorToast('There was a problem with deleting this book!', 'delete-book-error');
    onBookDelete();
  };
  return (
    <div>
      <button
        type="button"
        className="btn-page"
        onClick={() => setModal(true)}
      >
        - Delete book
      </button>
      {modal && (
        <div
          className="fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen
          dark:bg-black dark:bg-opacity-70"
          onClick={() => setModal(false)}
        >
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl
          dark:bg-gray-600 dark:text-white"
          >
            <p>Are you sure you want to delete this book from the stock: &quot;{title}&quot;?</p>
            <button
              type="button"
              className="btn-page"
              onClick={Delete}
            >
              - Delete book from stock
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
