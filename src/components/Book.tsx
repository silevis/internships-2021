import React, { FC } from 'react';

interface IBookProps {
  id?: string;
  title?: string;
  description?: string;
  publishedDate?: string;
  industryIdentifiers?: unknown[];
  image: string;
  authors?: string[];
  categories?: string[];
}

const Book: FC<IBookProps> = ({ id, title, authors, image }) => {
  return (
    <div key={id} className="flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-100 shadow-md p-3 m-3 mx-6">
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
        <button
          type="button"
          className="border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2
          transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-100"
        >
          + Dodaj książkę do magazynu
        </button>
      </div>
    </div>
  );
};

export default Book;
