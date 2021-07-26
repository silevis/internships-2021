import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';

const SliderDemo = () => {
  const [data, setData] = useState<IBook[] | null>([]);
  useEffect(() => {
    // eslint-disable-next-line
    const getAllBooks = async () => {
      // eslint-disable-next-line
      const { data: books, error } = await supabase
        .from<IBook>('books')
        .select(`
      *
    `);
      setData(books);
    };
    getAllBooks();
  }, []);

  if (data) {
    return (
      <Slider
        // eslint-disable-next-line
        entries={data?.map((book: any) => {
          return {
            id: book.id,
            title: book.title,
            authors: book.authors,
            image: book.imageLinks[0],
          };
        })}
        entryCount={data.length}
      />
    );
  }
  return <p>Loading...</p>;
};

export default SliderDemo;
