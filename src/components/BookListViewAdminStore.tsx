import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IGoogleBooksAPIVolumes } from '../interfaces/IGoogleBooksAPIVolumes.interface';
import BookAdminStore from './BookAdminStore';

const BookListViewAdmin = () => {
  const [dataAPI, setDataAPI] = useState<IGoogleBooksAPIVolumes>();
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=a');
        setDataAPI(res.data);
      } catch (e) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {error && <p className="text-red-600">There was an error while trying to fetch data!</p>}
      { dataAPI && dataAPI?.items.map((book) => (
        <BookAdminStore
          key={book.id ?? 'N/D'}
          id={book.id ?? 'N/D'}
          title={book.volumeInfo.title ?? 'N/D'}
          description={book.volumeInfo.description ?? 'N/D'}
          publishedDate={book.volumeInfo.publishedDate ?? 'N/D'}
          image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : `${process.env.PUBLIC_URL}/image-not-found.png`}
          authors={book.volumeInfo.authors}
          categories={book.volumeInfo.categories ?? ['N/D']}
          isbn={(book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier : 'N/D')}
        />
       ))}
    </div>
  );
};

export default BookListViewAdmin;
