import React, { FC } from 'react';
import AddBook from './AddBook';

interface IBookProps {
  id?: string;
  title?: string;
  description?: string;
  publishedDate?: string;
  image: string;
  isbn: string;
  authors?: string[];
  categories?: string[];
}

const Book: FC<IBookProps> = ({
  id,
  title,
  authors,
  image,
  publishedDate,
  categories,
  description,
  isbn,
}) => {
  return (
    <div className="flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-100 shadow-md p-3 m-3 mx-6">
      <img
        src={image}
        alt="A book."
        className="transform hover:scale-110 cursor-pointer m-3 w-32
        transition duration-400 ease-in-out hover:-translate-y-1"
      />
      <div className="ml-2 w-full">
        <span className="break-words cursor-pointer transition duration-400 ease-in-out hover:text-gray-500">{title}</span>
        <br />
        <span className="text-gray-400">{authors?.join(' ')}</span>
      </div>
      <div>
        <AddBook
          id={id}
          title={title}
          authors={authors}
          image={image}
          description={description}
          isbn={isbn}
          publishedDate={publishedDate}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default Book;
