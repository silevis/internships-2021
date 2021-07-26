import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IGoogleBooksAPIVolumes } from '../interfaces/IGoogleBooksAPIVolumes.interface';
import Book from '../components/Book';
import { IBook } from '../interfaces/IBook.interface';
import supabase from '../utils/supabase';
import StoreBook from '../components/StoreBook';

const BookListViewAdmin = () => {
  const [dataSupabase, setDataSupabase] = useState<IBook[] | null>([]);
  const [dataAPI, setDataAPI] = useState<IGoogleBooksAPIVolumes>();
  const [error, setError] = useState<boolean>();

  const getAllBooks = async () => {
    // eslint-disable-next-line
    const { data: books, error } = await supabase
      .from<IBook>('books')
      .select(`
    *
  `);
    if (books !== null) {
      setDataSupabase(books);
    }
  };

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

    getAllBooks();
  }, []);
  return (
    <div>
      {window.location.pathname === '/internships-2021/admin/store' && (
        dataAPI && dataAPI?.items.map((book) => (
          <Book
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
        ))
      )}
      {error && <p className="text-red-600">There was an error while trying to fetch data!</p>}
      {window.location.pathname === '/internships-2021/admin/owned' && (
        dataSupabase && dataSupabase?.map((book) => (
          <StoreBook
            key={book.id}
            id={book.id}
            title={book.title}
            image={book.imageLinks[0]}
            isbn={book.isbn}
            authors={book.authors}
            publishedDate={book.publishedDate}
            categories={book.categories}
            description={book.description}
            quantity={book.quantity}
            onBookDelete={getAllBooks}
          />
        ))
      )}
    </div>
  );
};

export default BookListViewAdmin;
