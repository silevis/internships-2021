import React, { FC, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../interfaces/IBook.interface';
import { getBookImage } from '../utils/utils';
import Rating from './Rating';
import './Book.css';
import 'react-toastify/dist/ReactToastify.css';
import BorrowBook from './BorrowBook';
import { useUser } from './UserContext';
import supabase from '../utils/supabase';

interface IBookProps {
  book: IBook;
}

const Book: FC<IBookProps> = ({
  book,
}) => {
  const user = useUser();
  const [status, setStatus] = useState(true);
  const isBorrowed = useCallback(async () => {
    if (supabase.auth.user()) {
    const { data } = await supabase
    .from('borrowedBooks')
    .select('id')
    .match({ bookId: book.id, profileId: user?.id });
    if (data?.length) {
      setStatus(true);
      return;
    }
    setStatus(false);
  }
  }, [book, user]);
  useEffect(() => {
    isBorrowed();
  }, [isBorrowed]);
  return (
    <div className="flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-white shadow p-3 m-3 mx-6">
      <div className="m-3 flex justify-center">
        <Link to={`/book/${book.id}`}>
          <img
            src={getBookImage(book)}
            alt={`${book.title ?? 'N/D'} cover.`}
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
        {book.quantity !== 0 && !status && (
        <BorrowBook
          bookId={book.id}
          profileId={user?.id}
          date={new Date()}
          returnDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
          quantity={book.quantity ? book.quantity - 1 : -1}
          onBookBorrow={isBorrowed}
        />
        )}
        {status && book.quantity !== 0 && (
          <span>You already borrowed this book</span>
        )}
        {book.quantity === 0 && (
          <span>Not in stock right now</span>
        )}
      </div>
    </div>
  );
};

export default Book;
