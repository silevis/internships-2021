import React, { FC, useEffect, useState } from 'react';
import Slider from '../components/homepage/Slider';
import { IBook } from '../interfaces/IBook.interface';
import { ISupplierBook } from '../interfaces/ISupplierBook.interface';
import supabase from '../utils/supabase';

interface SliderDemoProps {
  type: string;
}

const SliderDemo: FC<SliderDemoProps> = ({ type }) => {
  const [data, setData] = useState<IBook[] | null>([]);

  useEffect(() => {
    const getAllBooks = async () => {
      if (type === 'top') {
        const { data: books, error } = await supabase
          .from<IBook>('books')
          .select('*')
          .order('avgRating', { ascending: false });
        if (!error) {
          setData(books);
        } else {
          setData(null);
        }
      } else {
        const { data: books, error } = await supabase
          .from<IBook>('books')
          .select('*');
          if (!error) {
            setData(books);
          } else {
            setData(null);
          }
      }
    };
    getAllBooks();
  }, [type]);

  if (data) {
    return (
      <Slider
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
        // entryCount={data.length}
        entryCount={10}
      />
    );
  }
  return <p>Loading...</p>;
};

export default SliderDemo;
