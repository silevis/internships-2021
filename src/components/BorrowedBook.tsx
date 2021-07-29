import React, { FC } from 'react';
import { IBook } from '../interfaces/IBook.interface';
import getBookImage from '../utils/utils';
import Rating from './Rating';
import './Book.css';
import 'react-toastify/dist/ReactToastify.css';

interface IBookProps {
  book: IBook;
  returnDate: Date;
  date: Date;
}

const BorrowedBook: FC<IBookProps> = ({
  book,
  returnDate,
  date,
}) => {
  return (
    <div className="flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-50 shadow p-3 m-3 mx-6">
      <div className="m-3 flex justify-center flex-wrap flex-col">
        <div>
          <img
            src={getBookImage(book)}
            alt={`${book.title ?? 'N/D'} cover.`}
            className="w-32"
          />
        </div>
      </div>
      <div className="ml-2 mb-4 md:mb-0 w-full">
        {book.title ?? 'N/D'}
        <div className="text-gray-400 flex flex-col">
          <span>{book.authors?.join(' ') ?? 'N/D'}</span>
          <span>{book.categories ?? 'N/D'}</span>
          <div className="overflow-hidden max-h-20 book-desc">{book.description ?? 'N/D'}</div>
          <div className="flex h-4 mt-2">
            <Rating votesAmount={book.votesAmount} avgRating={book.avgRating} bare />
          </div>
        </div>
        <p className="text-right">Date: {date}</p>
        <p className="text-right">Return date: {returnDate}</p>
      </div>
    </div>
  );
};

export default BorrowedBook;
