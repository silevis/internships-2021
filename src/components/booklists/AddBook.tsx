import React, { FC, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { supabase } from '../../utils/supabase';
import { IBook } from '../../interfaces/IBook.interface';
import { useUser } from '../UserProvider';
import { errorToast } from '../../utils/utils';

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
  onQuantityUpdate: () => void;
}

const AddBook: FC<IBookProps> = ({
  id,
  title,
  authors,
  image,
  description,
  isbn,
  publishedDate,
  categories,
  quantity,
  onQuantityUpdate,
}) => {
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
    onQuantityUpdate();
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
        errorToast(err.message, 'adding-book-error')
      )}
    </div>
  );
};

export default AddBook;
