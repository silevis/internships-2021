import React, { FC } from 'react';
import { supabase } from '../utils/supabase';

interface IBookProps {
  id?: string;
  onBookDelete: () => void;
}
const DeleteBook: FC<IBookProps> = ({ id, onBookDelete }) => {
  const Delete = async () => {
    // eslint-disable-next-line
    const { data } = await supabase
    .from('books')
    .delete()
    .match({ id });
    onBookDelete();
  };
  return (
    <button
      type="button"
      className="border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2
      transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100"
      onClick={Delete}
    >
      -Usuń książkę z magazynu
    </button>
  );
};

export default DeleteBook;
