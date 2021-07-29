import React, { FC } from 'react';
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
  return (
    <div className="flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-100 shadow-md p-3 m-3 mx-6">
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
