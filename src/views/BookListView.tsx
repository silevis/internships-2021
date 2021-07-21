import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../components/Book';
import { IGoogleBooksAPIVolumes } from '../interfaces/IGoogleBooksAPIVolumes.interface';

// import { IBook } from '../interfaces/IBook.interface';

const BookListView = () => {
  const [data, setData] = useState<IGoogleBooksAPIVolumes>();
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    // eslint-disable-next-line space-before-function-paren
    const fetchData = async () => {
      try {
        setError(false);
        const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms');
        setData(res.data);
      } catch (e) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data?.items && data?.items.map((book) => (
        <Book
          key={book.id}
          title={book.volumeInfo.title}
          description={book.volumeInfo.description}
          publishedDate={book.volumeInfo.publishedDate}
          industryIdentifiers={book.volumeInfo.industryIdentifiers}
          image={book.volumeInfo.imageLinks.thumbnail}
          authors={book.volumeInfo.authors}
          categories={book.volumeInfo.categories}
        // smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
        />
      ))}
      {error && <p className="text-red-600">There was an error while trying to fetch data!</p>}
    </div>
  );
};

export default BookListView;
