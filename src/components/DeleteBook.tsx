import { PostgrestError } from '@supabase/supabase-js';
import React, { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { supabase } from '../utils/supabase';

interface IBookProps {
  id?: string;
  title?: string;
  onBookDelete: () => void;
}
const DeleteBook: FC<IBookProps> = ({ id, onBookDelete, title }) => {
  const [modal, setModal] = useState(false);
  const [err, setErr] = useState<PostgrestError | null>();
  const Delete = async () => {
    const { error } = await supabase
      .from('books')
      .delete()
      .match({ id });
      setErr(error);
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
          className="fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen"
          onClick={() => setModal(false)}
        >
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl">
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
      {err && (
        toast.error('There was a problem with deleting this book!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      )}
    </div>
  );
};

export default DeleteBook;
