import React, { FC, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { toast } from 'react-toastify';
import { supabase } from '../utils/supabase';
import { IBook } from '../interfaces/IBook.interface';
import { useUser } from './UserContext';

interface IBookProps {
  id?: string;
  title?: string;
  description?: string;
  publishedDate?: string;
  image: string;
  isbn: string;
  authors?: string[];
  categories?: string[];
  quantity: number;
}

const AddBook: FC<IBookProps> = ({ id, title, authors, image, description, isbn, publishedDate, categories, quantity }) => {
  const globalUser = useUser();
  const [err, setErr] = useState<PostgrestError | null>();
  const addToStore = async () => {
    const { error } = await supabase
      .from<IBook>('books')
      .insert({
        id,
        title,
        description,
        publishedDate,
        categories,
        isbn,
        imageLinks: [image],
        authors,
        votesAmount: Math.floor(Math.random() * 1000) + 1,
        avgRating: Math.floor(Math.random() * 10) + 1,
        addedById: globalUser?.id,
        addedDate: new Date(),
        quantity,
      });
    setErr(error);
  };

  return (
    <div>
      <button
        type="button"
        className="btn-page"
        onClick={addToStore}
      >
        + Add books to the stock
      </button>
      {err && (
        toast.error(err.message, {
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

export default AddBook;
