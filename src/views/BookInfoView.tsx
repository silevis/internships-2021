import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookInfo from '../components/BookInfo';
import Sidebar from '../components/Sidebar';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';

interface BookInfoURLParams {
  id: string
}

const BookInfoPage = () => {
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
  return book ? (
    <div className="content-container bg-white">
      <Sidebar />
      <div className="mt-16 w-full">
        <BookInfo book={book} />
      </div>
    </div>
) : <span>Book doesn&apos;t exist</span>;
};

export default BookInfoPage;
