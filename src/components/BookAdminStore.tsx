import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
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
}

const Book: FC<IBookProps> = ({
  id,
  title,
  authors,
  image,
  publishedDate,
  categories,
  description,
  isbn,
}) => {
  const [quantity, setQuantity] = useState('1');
  return (
    <div className="flex flex-col sm:flex-row place-content-center max-w-full md:w-auto bg-gray-50 shadow p-3 m-3 mx-6">
      <div className="m-3 ">
        <Link to={`/book/${id}`}>
          <img
            src={image}
            alt="A book"
            className="transform hover:scale-110 cursor-pointer w-32
        transition duration-400 ease-in-out hover:-translate-y-1"
          />
        </Link>
      </div>
      <div className="ml-2 w-full">
        <span className="break-words cursor-pointer transition duration-400 ease-in-out hover:text-gray-500">
          <Link to={`/book/${id}`}>{title}</Link>
        </span>
        <br />
        <span className="text-gray-400">{authors?.join(' ')}</span>
        <br />
        <span className="text-gray-400">{categories}</span>
      </div>
      <div>
        <div>
          <div>
            <p>Quantity:</p>
            <input
              id="quantity"
              name="quantity"
              type="number"
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>
          <AddBook
            id={id}
            title={title}
            authors={authors}
            image={image}
            description={description}
            isbn={isbn}
            publishedDate={publishedDate}
            categories={categories}
            quantity={Number(quantity)}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
