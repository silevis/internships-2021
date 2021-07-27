import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IGoogleBooksAPIVolumes } from '../interfaces/IGoogleBooksAPIVolumes.interface';
import StoreBook from '../components/StoreBook';

const BookListViewAdminStore = () => {
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
      {dataAPI && dataAPI?.items.map((book) => (
        <StoreBook
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
      {error && <p className="text-red-600">There was an error while trying to fetch data!</p>}
    </div>
  );
};

export default BookListViewAdminStore;
