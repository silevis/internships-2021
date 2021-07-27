import React, { FC } from 'react';
import { supabase } from '../utils/supabase';
import { IBook } from '../interfaces/IBook.interface';

interface IBookProps {
  id?: string;
  quantity?: number;
  onQuantityUpdate: (quantity: number) => void;
}

const UpdateBook: FC<IBookProps> = ({ id, quantity, onQuantityUpdate }) => {
  const Update = async () => {
    await supabase.from<IBook>('books')
      .update({ quantity })
      .match({ id });
    onQuantityUpdate(quantity ?? 0);
  };

  return (
    <div>
      <button
        type="button"
        className="btn-page"
        onClick={Update}
      >
        + Add books to the stock
      </button>
    </div>
  );
};

export default UpdateBook;
