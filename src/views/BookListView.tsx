import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import Book from '../components/Book';
import Sidebar, { getFilterType } from '../components/Sidebar';
import Pagination from '../components/Pagination';

interface IParams {
  q: string;
  rating: string;
}

const checkAuthors = (authors: string[], query: string) => {
  let matched = false;
  if (query === '*') return true;
  authors?.forEach((author) => {
    if (author.toLowerCase().includes(query.toLowerCase())) matched = true;
  });
  return matched;
};

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
      const q = `%${params.q ? params.q : '*'}%`;
      if (getFilterType() === 'title') {
        const { data: books } = await supabase
          .from<IBook>('books')
          .select('*')
          .ilike('title', q)
          .gte('avgRating', params.rating)
          .range(startIndex, endIndex);
        setData(books);
      } else if (getFilterType() === 'authors') {
        const { data: books } = await supabase
          .from<IBook>('books')
          .select('*')
          .gte('avgRating', params.rating)
          .range(startIndex, endIndex);
        const x = books?.filter((book) => checkAuthors(book?.authors, params.q)) ?? [];
        setData(x);
      }
    };
    getAllBooks();
    getNumberOfBooks();
  }, [params, startIndex, endIndex]);
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
      <Pagination
        count={numberOfBooks || 10}
        pageSize={10}
        currentPage={startIndex / 10}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default BookListView;
