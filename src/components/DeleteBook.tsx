import React, { FC, useState } from 'react';
import { supabase } from '../utils/supabase';

interface IBookProps {
  id?: string;
  title?: string;
  onBookDelete: () => void;
}
const DeleteBook: FC<IBookProps> = ({ id, onBookDelete, title }) => {
  const [modal, setModal] = useState(false);
  const Delete = async () => {
    // eslint-disable-next-line
    const { data } = await supabase
    .from('books')
    .delete()
    .match({ id });
    onBookDelete();
  };
  return (
    <div>
      <button
        type="button"
        className="btn-page"
        onClick={() => setModal(true)}
      >
        -Usuń książke
      </button>
      {modal && (
      <div
        className="fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen"
        onClick={() => setModal(false)}
      >
        <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl">
          <p>Czy na pewno chcesz usunąć książke: {title}</p>
          <button
            type="button"
            className="btn-page"
            onClick={Delete}
          >
            -Usuń książkę z magazynu
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default DeleteBook;
