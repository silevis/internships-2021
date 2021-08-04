import React, { FC } from 'react';
import { IBook } from '../../interfaces/IBook.interface';
import { getBookImage } from '../../utils/utils';
import Rating from '../universal/Rating';
import '../universal/Book.css';
import 'react-toastify/dist/ReactToastify.css';
// import ReturnBook from './ReturnBook';
import { IProfile } from '../../interfaces/IProfile.interface';

interface IBorrowedBookInfoProps {
  book: IBook;
  profile: IProfile;
  date: Date;
  returnDate: Date;
}

const BorrowedBooksView: FC<IBorrowedBookInfoProps> = ({
  book,
  profile,
  returnDate,
  date,
}) => {
  return (
    <div className="flex flex-col place-content-center max-w-full bg-gray-50 shadow p-3 m-3 mx-6
    sm:flex-row md:w-auto
    dark:bg-gray-600 dark:text-white"
    >
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
        {/* <ReturnBook
          id={id}
          bookId={book.id}
          quantity={book.quantity + 1}
          onBookReturn={onBookReturn}
          title={book.title}
        /> */}
        <p className="text-right">Date: {date}</p>
        <p className="text-right">Return date: {returnDate}</p>
        <p className="text-right">User: {`${profile.firstName} ${profile.lastName}`}</p>
      </div>
    </div>
  );
};

export default BorrowedBooksView;
