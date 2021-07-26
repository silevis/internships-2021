import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../interfaces/IBook.interface';
import getBookImage from '../utils/utils';
import AddBook from './AddBook';
import Rating from './Rating';
import './Book.css';
import supabase from '../utils/supabase';
import UpdateBook from './UpdateBook';

interface IBookProps {
  book: IBook;
}

const Book: FC<IBookProps> = ({
  book,
}) => {
  const [data, setData] = useState<IBook[] | null>([]);
  const [quantityInput, setQuantityInput] = useState('1');

  useEffect(() => {
    const getBookData = async () => {
      // eslint-disable-next-line
      const { data, error } = await supabase
        .from<IBook>('books')
        .select(`
      id, quantity
    `).eq('id', book.id);
      if (data !== null) {
        setData(data);
      }
    };
   getBookData();
  }, [book.id]);
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
        <div>
          <p>Quantity:</p>
          <input
            id="quantity"
            name="quantity"
            type="number"
            onChange={(event) => setQuantityInput(event.target.value)}
          />
          {data?.length !== 0 && (
            <div>
              <div className="bg-red-500 text-white">W magazynie {data?.map((b) => b.quantity)[0]} </div>
              <UpdateBook
                id={book.id}
                quantity={Number(quantityInput) + (data?.map((b) => b.quantity)[0] ?? 0)}
              />
            </div>
          )}
          {data?.length === 0 && (
          <AddBook
            id={book.id}
            title={book.title}
            authors={book.authors}
            image={getBookImage(book)}
            description={book.description}
            isbn={book.isbn}
            publishedDate={book.publishedDate}
            categories={book.categories}
            quantity={Number(quantityInput)}
          />
          )}
        </div>
        )}
        {window.location.pathname !== '/internships-2021/admin/store' && (
          <button
            type="button"
            className="btn-page"
          >
            Kup książkę
          </button>
        )}
      </div>
    </div>
  );
};

export default Book;
