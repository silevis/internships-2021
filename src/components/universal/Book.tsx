import React, { FC, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IBook } from '../../interfaces/IBook.interface';
import { getBookImage } from '../../utils/utils';
import Rating from './Rating';
import './Book.css';
import 'react-toastify/dist/ReactToastify.css';
import BorrowBook from '../booklists/BorrowBook';
import supabase from '../../utils/supabase';
import { useUser } from '../UserProvider';

interface IBookProps {
  book: IBook;
}

const Book: FC<IBookProps> = ({ book }) => {
  const motionVariants = {
    hidden: {
      x: -100,
    },
    shown: {
      x: 0,
    },
  };
  const user = useUser();
  const [status, setStatus] = useState(false);
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
    <motion.div
      className="flex flex-col place-content-center max-w-full bg-white shadow p-3 m-3 mx-6
      sm:flex-row md:w-auto
      dark:bg-gray-600 dark:text-white"
      variants={motionVariants}
      initial="hidden"
      animate="shown"
    >
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
        <span className="break-words cursor-pointer
        transition duration-300 ease-in-out hover:text-gray-500
        dark:hover:text-black"
        >
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
        {!status && (
          <BorrowBook
            bookId={book.id}
            profileId={user?.id}
            date={new Date()}
            returnDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
            quantity={book.quantity ? book.quantity - 1 : -1}
            onBookBorrow={isBorrowed}
          />
        )}
        {status && (
          <span className="dark:text-gray-200">You have already borrowed this book</span>
        )}
      </div>
    </motion.div>
  );
};

export default Book;
