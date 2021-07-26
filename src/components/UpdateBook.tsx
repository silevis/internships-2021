import React, { FC } from 'react';
import { supabase } from '../utils/supabase';
import { IBook } from '../interfaces/IBook.interface';

interface IBookProps {
  id?: string;
  quantity?: number;
}

const AddBook: FC<IBookProps> = ({ id, quantity }) => {
  // eslint-disable-next-line
  const Update = async () => {
    await supabase.from<IBook>('books')
    .update({ quantity })
    .match({ id });
  };

  return (
    <div>
      <button
        type="button"
        className="border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2
        transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100"
        onClick={Update}
      >
        + Zwiększ ilość w magazynie
      </button>
    </div>
  );
};

export default AddBook;
