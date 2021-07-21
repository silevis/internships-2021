import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';

const SliderDemo = () => {
  const [books, setBooks] = useState<any>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms');
        setBooks(data?.items);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  if (books) {
    return (
      <Slider
        entries={books?.map((book: any) => {
          return {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            image: book.volumeInfo.imageLinks.thumbnail,
          };
        })}
        entryCount={books.length}
      />
    );
  }

  return <p>Loading...</p>;
};

export default SliderDemo;
