import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import { IBook } from '../interfaces/IBook.interface';
import { ISupplierBook } from '../interfaces/ISupplierBook.interface';
import supabase from '../utils/supabase';

const SliderDemo = () => {
  const [data, setData] = useState<IBook[] | null>([]);
  useEffect(() => {
    const getAllBooks = async () => {
      const { data: books } = await supabase
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
        entries={data?.map((book: ISupplierBook) => {
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
