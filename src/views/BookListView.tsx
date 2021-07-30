import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IBook } from '../interfaces/IBook.interface';
import Book from '../components/Book';
import Sidebar, { getFilterType, getCat } from '../components/Sidebar';
import { filterByAuthor, filterByTitle } from '../components/Filtering';

interface IParams {
  q: string;
  rating: string;
}

const BookListView = () => {
  const [data, setData] = useState<IBook[] | null>([]);
  const params: IParams = useParams();
  useEffect(() => {
    const getAllBooks = async () => {
      if (getFilterType() === 'title') {
        setData(await filterByTitle(params.q, params.rating, getCat()));
      } else if (getFilterType() === 'authors') {
        setData(await filterByAuthor(params.q, params.rating, getCat()));
      }
    };
    getAllBooks();
  }, [params]);
  return (
    <div className="content-container">
      <Sidebar />
      <div className="mt-3 w-full shadow-inner">
        {data && data?.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        {data && data?.length < 1 && (
          <div className="flex justify-center italic">No results</div>
        )}
      </div>
    </div>
  );
};

export default BookListView;
