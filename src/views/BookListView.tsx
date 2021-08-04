import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IBook } from '../interfaces/IBook.interface';
import Book from '../components/universal/Book';
import { filterByAuthor, filterByTitle } from '../components/common/Filtering';
import Sidebar, { getFilterType, getCat } from '../components/common/Sidebar';
import NoResults from '../components/booklists/NoResults';
import { PageExitAnimation } from '../components/App';

interface IParams {
  q: string;
  rating: string;
}

const BookListView = () => {
  const [data, setData] = useState<IBook[] | null>([]);
  const params: IParams = useParams();

  useEffect(() => {
    if (params?.q?.length < 1) params.q = '*';
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
    <motion.div exit={PageExitAnimation}>
      <div>
        <div className="content-container">
          <Sidebar />
          <div className="w-full shadow-inner">
            {data && data?.map((book) => (
              <Book key={book.id} book={book} />
            ))}
            {data && data?.length < 1 && <NoResults />}
          </div>
        </div>
        <div className="flex flex-row w-full justify-center text-xl" />
      </div>
    </motion.div>
  );
};

export default BookListView;
