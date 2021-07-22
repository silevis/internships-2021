import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookInfo from '../components/BookInfo';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';

interface BookInfoURLParams {
  id: string
}

const BookInfoPage = () => {
  const params = useParams<BookInfoURLParams>();
  const [book, setBook] = useState<IBook>();

  useEffect(() => {
    // eslint-disable-next-line
    const getAllBooks = async () => {
      // eslint-disable-next-line
      const { data } = await supabase
        .from<IBook>('books')
        .select('*')
        .eq('id', params.id);
      if (data !== null) {
        setBook(data[0]);
      }
    };
    getAllBooks();
  }, [params]);
  return book ? <BookInfo book={book} /> : <span>simea</span>;
};

export default BookInfoPage;
