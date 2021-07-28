import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import { IBook } from '../interfaces/IBook.interface';
import { ISupplierBook } from '../interfaces/ISupplierBook.interface';
import supabase from '../utils/supabase';

const SliderDemo = (type?: 'top' | 'random' | any) => {
  const [data, setData] = useState<IBook[] | null>([]);
  useEffect(() => {
    const getAllBooks = async () => {
      if (type === 'top') {
        const { data: books, error } = await supabase
          .from<IBook>('books')
          .select('*')
          .order('avgRating', { ascending: false });
        setData(books);
        console.log(error);
      } else {
        // eslint-disable-next-line
        const { data: books, error } = await supabase
          .from<IBook>('books')
          .select('*');
        setData(books);
      }
    };
    getAllBooks();
  }, []);

  if (data) {
    return (
      <Slider
        // eslint-disable-next-line
        entries={data?.map((book: ISupplierBook) => {
          return {
            id: book.id,
            title: book.title,
            authors: book.authors,
            image: book.imageLinks[0],
            votesAmount: book.votesAmount,
            avgRating: book.avgRating,
          };
        })}
        entryCount={data.length}
      />
    );
  }
  return <p>Loading...</p>;
};

export default SliderDemo;
