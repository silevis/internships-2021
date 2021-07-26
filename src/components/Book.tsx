import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../interfaces/IBook.interface';
import getBookImage from '../utils/utils';
import AddBook from './AddBook';
import Rating from './Rating';
import './Book.css';

interface IBookProps {
  book: IBook;
}

const Book: FC<IBookProps> = ({
  book,
}) => {
  return (
    <div className="flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-50 shadow p-3 m-3 mx-6">
      <div className="m-3 flex justify-center">
        <Link to={`/book/${book.id}`}>
          <img
            src={getBookImage(book)}
            alt={`Zdjecie okladki ${book.title ?? 'N/D'}`}
            className="transform hover:scale-110 cursor-pointer w-32
        transition duration-400 ease-in-out hover:-translate-y-1"
          />
        </Link>
      </div>
      <div className="ml-2 mb-4 md:mb-0 w-full">
        <span className="break-words cursor-pointer transition duration-400 ease-in-out hover:text-gray-500">
          <Link to={`/book/${book.id}`}>{book.title ?? 'N/D'}</Link>
        </span>
        <div className="text-gray-400 flex flex-col">
          <span>{book.authors?.join(' ') ?? 'N/D'}</span>
          <span>{book.categories ?? 'N/D'}</span>
          <div className="overflow-hidden max-h-20 book-desc">{book.description ?? 'N/D'}</div>
          <div className="flex h-4 mt-2">
            <Rating votesAmount={book.votesAmount} avgRating={book.avgRating} bare />
          </div>
        </div>
      </div>
      <div>
        {window.location.pathname === '/internships-2021/admin/store' && (
          <AddBook
            id={book.id}
            title={book.title}
            authors={book.authors}
            image={getBookImage(book)}
            description={book.description}
            isbn={book.isbn}
            publishedDate={book.publishedDate}
            categories={book.categories}
          />
        )}
        {window.location.pathname !== '/internships-2021/admin/store' && (
          <button
            type="button"
            className="border-gray-400 text-gray-400 rounded-sm border-2 max-h-full ml-2 p-2
          transition duration-500 ease-in-out hover:bg-gray-400 hover:text-gray-50"
          >
            Kup naszom ksionszke
          </button>
        )}
      </div>
    </div>
  );
};

export default Book;
