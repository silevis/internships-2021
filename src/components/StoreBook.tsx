import React, { FC, useState, useEffect, useCallback } from 'react';
import UpdateBook from './UpdateBook';
import supabase from '../utils/supabase';
import AddBook from './AddBook';
import { warningToast } from '../utils/utils';

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
  const [quantity, setQuantity] = useState<number | null>(null);
  const [data, setData] = useState<IBookProps[] | null>([]);
  const getBookData = useCallback(async () => {
    const { data: bookData } = await supabase
      .from<IBookProps>('books')
      .select(`
    id, quantity
  `).eq('id', id);
    if (bookData !== null) {
      setData(bookData);
      setQuantity(bookData[0]?.quantity ?? 0);
    }
  }, [id]);
  useEffect(() => {
    getBookData();
  }, [getBookData]);

  const incorrectQuantityHandler = (value: string) => {
    if (value.includes('-')) {
      return warningToast('You have tried to add negative value!', 'negative-value-warning');
    }
    if (value.includes(',') || value.includes('.')) {
      return warningToast('You have tried to add float value!', 'float-value-warning');
    }
    // eslint-disable-next-line
    if (isNaN(Number(value))) {
      return warningToast('You have tried to add NaN value', 'NaN-value-warning');
    }
    return setQuantityInput(value);
  };

  return (
    <div className="flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-100 shadow-md p-3 m-3 mx-6">
      <img
        src={image}
        alt="A book."
        className="transform m-3 w-32"
      />
      <div className="ml-2 w-full flex flex-col">
        {title}
        <span className="text-gray-400">{authors?.join(' ')}</span>
        <span className="text-gray-400">{categories}</span>
      </div>
      <div>
        <p>Quantity:</p>
        <input
          id="quantity"
          name="quantity"
          type="number"
          onChange={(event) => incorrectQuantityHandler(event.target.value)}
        />
        {data?.length !== 0 && (
          <div>
            <div className="bg-gray-400 text-white">In a stock: {quantity} </div>
            <UpdateBook
              id={id}
              quantity={Number(quantityInput) + (quantity ?? 0)}
              onQuantityUpdate={(q) => setQuantity(q)}
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
            onQuantityUpdate={getBookData}
          />
        )}
      </div>
    </div>
  );
};

export default StoreBook;
