import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IBook } from '../interfaces/IBook.interface';
import Book from '../components/Book';
import supabase from '../utils/supabase';
import { filterByAuthor, filterByTitle } from '../components/Filtering';
import Sidebar, { getFilterType, getCat } from '../components/Sidebar';
import Pagination from '../components/Pagination';
import NoResults from '../components/NoResults';

interface IParams {
  q: string;
  rating: string;
}

const BookListView = () => {
  const [data, setData] = useState<IBook[] | null>([]);
  const [numberOfBooks, setNumberOfBooks] = useState<number | null>(10);
  const params: IParams = useParams();
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
        setData(await filterByTitle(params.q, params.rating, getCat()));
      } else if (getFilterType() === 'authors') {
        setData(await filterByAuthor(params.q, params.rating, getCat()));
      }
    };
    getAllBooks();
    getNumberOfBooks();
  }, [params, startIndex, endIndex]);
  return (
    <div className="bg-gray-50">
      <div className="content-container">
        <Sidebar />
        <div className="fixed left-0 flex flex-row w-full justify-center z-40 mt-2">
          <Pagination
            count={numberOfBooks || 10}
            pageSize={10}
            currentPage={startIndex / 10}
            onPageChange={onPageChange}
          />
        </div>
        <div className="mt-3 w-full shadow-inner">
          {data && data?.map((book) => (
            <Book key={book.id} book={book} />
          ))}
          {data && data?.length < 1 && <NoResults />}
        </div>
      </div>
    </div>
  );
};

export default BookListView;
