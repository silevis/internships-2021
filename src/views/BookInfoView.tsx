import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BookInfo from '../components/BookInfo';
import Sidebar from '../components/common/Sidebar';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import { PageExitAnimation } from '../components/App';

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
  return (
    <motion.div exit={PageExitAnimation}>
      {book ? (
        <div className="content-container bg-white">
          <Sidebar />
          <div className="mt-16 w-full">
            <BookInfo book={book} />
          </div>
        </div>
) : <span>Book doesn&apos;t exist</span>}
    </motion.div>
);
};

export default BookInfoView;
