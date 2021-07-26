import React, { FC } from 'react';
import { supabase } from '../utils/supabase';
import { IBook } from '../interfaces/IBook.interface';
import { useUser } from './UserContext';

interface IBookProps {
  id?: string;
  title?: string;
  description?: string;
  publishedDate?: string;
  image: string;
  isbn: string;
  authors?: string[];
  categories?: string[];
  quantity: number;
}

const AddBook: FC<IBookProps> = ({ id, title, authors, image, description, isbn, publishedDate, categories, quantity }) => {
  const globalUser = useUser();
  // eslint-disable-next-line
  const Add = async () => {
    await supabase.from<IBook>('books').insert({
      id,
      title,
      description,
      publishedDate,
      categories,
      isbn,
      imageLinks: [image],
      authors,
      votesAmount: Math.floor(Math.random() * 1000) + 1,
      avgRating: Math.floor(Math.random() * 10) + 1,
      addedById: globalUser?.id,
      addedDate: new Date(),
      quantity,
    });
  };

  return (
    <button
      type="button"
      className="btn-page"
      onClick={Add}
    >
      + Dodaj książkę do magazynu
    </button>
  );
};

export default AddBook;
