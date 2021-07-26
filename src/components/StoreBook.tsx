import React, { FC, useState, useEffect } from 'react';
import UpdateBook from './UpdateBook';
import supabase from '../utils/supabase';
import AddBook from './AddBook';

interface IBookProps {
  id?: string;
  title?: string;
  description?: string;
  publishedDate?: string;
  image: string;
  isbn: string;
  authors?: string[];
  categories?: string[];
  quantity?: number;
}

const StoreBook: FC<IBookProps> = ({
  id,
  title,
  authors,
  image,
  publishedDate,
  categories,
  description,
  isbn,
}) => {
  const [quantityInput, setQuantityInput] = useState('1');
  const [data, setData] = useState<IBookProps[] | null>([]);

  useEffect(() => {
    const getBookData = async () => {
      // eslint-disable-next-line
      const { data, error } = await supabase
        .from<IBookProps>('books')
        .select(`
      id, quantity
    `).eq('id', id);
      if (data !== null) {
        setData(data);
      }
    };
   getBookData();
  }, [id]);
  return (
    <div className="flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-100 shadow-md p-3 m-3 mx-6">
      <img
        src={image}
        alt="A book."
        className="transform hover:scale-110 cursor-pointer m-3 w-32
        transition duration-400 ease-in-out hover:-translate-y-1"
      />
      <div className="ml-2 w-full">
        <span className="break-words cursor-pointer transition duration-400 ease-in-out hover:text-gray-500">{title}</span>
        <br />
        <span className="text-gray-400">{authors?.join(' ')}</span>
        <br />
        <span className="text-gray-400">{categories}</span>
        <br />
      </div>
      <div>
        <p>Quantity:</p>
        <input
          id="quantity"
          name="quantity"
          type="number"
          onChange={(event) => setQuantityInput(event.target.value)}
        />
        {data?.length !== 0 && (
        <div>
          <div className="bg-red-500 text-white">W magazynie {data?.map((book) => book.quantity)[0]} </div>
          <UpdateBook
            id={id}
            quantity={Number(quantityInput) + (data?.map((book) => book.quantity)[0] ?? 0)}
          />
        </div>
          )}
        {data?.length === 0 && (
          <AddBook
            id={id}
            title={title}
            authors={authors}
            image={image}
            description={description}
            isbn={isbn}
            publishedDate={publishedDate}
            categories={categories}
            quantity={Number(quantityInput)}
          />
          )}
      </div>
    </div>
  );
};

export default StoreBook;
