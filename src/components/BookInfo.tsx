import { useState, FC, useEffect, useCallback } from 'react';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import { getBookImage } from '../utils/utils';
import BorrowBook from './booklists/BorrowBook';
import SpecificationTable from './universal/SpecificationTable';
import Rating from './universal/Rating';
import Tablist from './universal/Tablist';
import { useUser } from './UserProvider';

interface IBookInfoProps {
  book: IBook
}

const BookInfo: FC<IBookInfoProps> = ({ book }) => {
  const [specsTabList] = useState([{
    key: 'Published date',
    value: book.publishedDate,
  }, {
    key: 'ID',
    value: book.id,
  }, {
    key: 'Title',
    value: book.title,
  }, {
    key: 'ISBN',
    value: book.isbn,
  }, {
    key: 'Authors',
    value: book.authors?.join(', '),
  }, {
    key: 'Categories',
    value: book.categories?.join(', '),
  }]);

  const [tabList] = useState([{
    title: 'Details',
    content:
      (
        <div className="flex justify-center p-1 md:p-4 dark:bg-gray-600 dark:text-gray-200">
          <SpecificationTable items={specsTabList} />
        </div>
      ),
  }]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [enlarged, setEnlarged] = useState(false);
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
    <div className="w-11/12 m-auto mt-8">
      <div className="md:w-11/12 m-auto flex flex-wrap flex-col md:flex-row items-start">
        <div className="m-auto flex flex-wrap flex-col items-start md:flex-row md:w-2/6">
          <img
            onClick={() => setEnlarged(true)}
            src={book.imageLinks[0]}
            alt="A book."
            className="m-auto md:w-1/3 max-h-56 object-scale-down
            transform hover:scale-110 cursor-pointer w-32 pr-2
            transition duration-400 ease-in-out hover:-translate-y-1"
          />
        </div>
        <div className="lg:w-2/3 flex-col lg:flex-row flex flex-wrap">
          <div className="lg:w-6/12 flex flex-auto flex-col">
            <span className="text-xl dark:text-gray-300">{book.title}</span> <br />
            <div className="flex">
              <div className="w-1/2 text-gray-600 dark:text-gray-300">{book.categories?.join(', ')}</div>
              <div className="w-1/2 text-right text-gray-600 dark:text-gray-300">{book.authors?.join(', ')}</div>
            </div>
            <div className="mt-12 text-sm text-gray-700 text-justify dark:text-gray-300">
              {book.description}
            </div>
          </div>
          <div className="lg:w-2/12 mt-4 lg:ml-4">
            <Rating bare={false} votesAmount={book.votesAmount} avgRating={book.avgRating} />
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
              <span className="dark:text-gray-200">You have already borrowed this book</span>
            )}
            {book.quantity === 0 && (
              <span className="dark:text-gray-200">Not in stock right now</span>
            )}
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 mt-8 m-auto">
        <Tablist tabs={tabList} defaultTab={0} />
      </div>
      {enlarged && (
        <div
          className="fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen
          dark:bg-black dark:bg-opacity-70"
          onClick={() => setEnlarged(false)}
        >
          <div className="relative m-auto flex-col flex rounded-md shadow-xl transform scale-150">
            <img src={getBookImage(book)} alt="A book." />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookInfo;
