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
      className="btn-page"
      onClick={Delete}
    >
      -Usuń książkę z magazynu
    </button>
  );
};

export default DeleteBook;
