import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookInfoPage from '../components/BookInfoPage';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';

interface BookInfoURLParams {
  id: string
}

const BookInfoView = () => {
  const params = useParams<BookInfoURLParams>();
  const [book, setBook] = useState<IBook>();

  useEffect(() => {
    const getAllBooks = async () => {
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
  return book ? <BookInfoPage book={book} /> : <span>simea</span>;
};

export default BookInfoView;
