import React, { FC, useEffect, useState } from 'react';
import { IBookBorrow } from '../../interfaces/IBookBorrow.interface';
import supabase from '../../utils/supabase';
import DeleteBook from './DeleteBook';

interface IBookProps {
  id?: string;
  title?: string;
  description?: string;
  publishedDate?: string;
  image: string;
  isbn: string;
  authors?: string[];
  categories?: string[];
  quantity?: number;
  onBookDelete: () => void;
}

const OwnedBook: FC<IBookProps> = ({
  id,
  title,
  authors,
  image,
  categories,
  quantity,
  onBookDelete,
}) => {
  const [borrowedQuantity, setBorrowedQuantity] = useState(0);

  useEffect(() => {
    const getBorrowedQuantity = async () => {
      const { data } = await supabase
        .from<IBookBorrow>('borrowedBooks')
        .select('*')
        .eq('bookId', id);
      if (data !== null) {
        setBorrowedQuantity(data.length);
      }
    };
    getBorrowedQuantity();
  }, [id]);
  return (
    <div className="flex flex-col place-content-center max-w-full bg-gray-100 shadow-md p-3 m-3 mx-6
    sm:flex-row md:w-auto
    dark:bg-gray-600 dark:text-white"
    >
      <img
        src={image}
        alt="A book."
        className="m-3 w-32"
      />
      <div className="ml-2 w-full flex flex-col">
        {title}
        <span className="text-gray-400">{authors?.join(' ')}</span>
        <span className="text-gray-400">{categories}</span>
        <span className="text-gray-400">Quantity of books in stock: {quantity}</span>
        <span className="text-gray-400">Quantity of borrowed books: {borrowedQuantity}</span>
      </div>
      <div>
        <DeleteBook
          id={id}
          title={title}
          onBookDelete={onBookDelete}
        />
      </div>
    </div>
  );
};

export default OwnedBook;
