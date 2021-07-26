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
      .select('*');
    if (books !== null) {
      setDataSupabase(books);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=sapkowski');
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
            book={{
              id: book.id,
              title: book.volumeInfo.title,
              description: book.volumeInfo.description,
              publishedDate: book.volumeInfo.publishedDate,
              imageLinks: book.volumeInfo.imageLinks ? [book.volumeInfo.imageLinks.thumbnail] : [],
              authors: book.volumeInfo.authors,
              categories: book.volumeInfo.categories,
              isbn: book.volumeInfo.industryIdentifiers[0].identifier,
              featuredImageId: 0,
              votesAmount: book.volumeInfo.ratingsCount,
              avgRating: book.volumeInfo.averageRating,
              addedById: book.id,
              addedDate: null,
            }}
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
            onBookDelete={getAllBooks}
          />
        ))
      )}
    </div>
  );
};

export default BookListViewAdmin;
