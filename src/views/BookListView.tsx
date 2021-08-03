import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IBook } from '../interfaces/IBook.interface';
import Book from '../components/universal/Book';
import { filterByAuthor, filterByTitle } from '../components/common/Filtering';
import Sidebar, { getFilterType, getCat } from '../components/common/Sidebar';
import NoResults from '../components/booklists/NoResults';
import Pagination from '../components/booklists/Pagination';
import { PageExitAnimation } from '../components/App';
import supabase from '../utils/supabase';

interface IParams {
  q: string;
  rating: string;
}

const BookListView = () => {
  const [data, setData] = useState<IBook[] | null>([]);
  const params: IParams = useParams();
  const [numberOfBooks, setNumberOfBooks] = useState<number | null>(10);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(10);
  const onPageChange = (selectedPage: { selected: number }) => {
    setStartIndex(selectedPage.selected * 10);
    setEndIndex((selectedPage.selected * 10) + 10);
  };
  useEffect(() => {
    const getNumberOfBooks = async () => {
      const { count } = await supabase
      .from<IBook>('books')
      .select('id', { count: 'exact' });
      setNumberOfBooks(count);
    };
    if (params?.q?.length < 1) params.q = '*';
    const getAllBooks = async () => {
      if (getFilterType() === 'title') {
        setData(await filterByTitle(params.q, params.rating, getCat(), startIndex, endIndex));
      } else if (getFilterType() === 'authors') {
        setData(await filterByAuthor(params.q, params.rating, getCat(), startIndex, endIndex));
      }
    };
    getAllBooks();
    getNumberOfBooks();
  }, [params, startIndex, endIndex]);

  return (
    <motion.div exit={PageExitAnimation}>
      <div className="bg-gray-50">
        <div className="content-container">
          <Sidebar />
          <div className="w-full shadow-inner">
            {data && data?.map((book) => (
              <Book key={book.id} book={book} />
            ))}
            {data && data?.length < 1 && <NoResults />}
          </div>
        </div>
        <div className="flex flex-row w-full justify-center mb-2 text-xl">
          <Pagination
            count={numberOfBooks || 10}
            pageSize={10}
            currentPage={startIndex / 10}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BookListView;
