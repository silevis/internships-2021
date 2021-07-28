import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Slide = ({ id = '', title = '', author = '', image = '', votesAmount = 0, avgRating = 0 }) => {
  return (
    <Link to={`/book/${id}`} className="flex flex-col justify-center items-center text-center h-72 w-64 ">
      <img src={image} alt={title} className="w-48 h-64 overflow-hidden" />
      {`${title}\n`}
      <span className="text-gray-500 text-sm">{`${author}\n`}</span>
      <Rating bare={false} votesAmount={votesAmount} avgRating={avgRating} /><br />
    </Link>
  );
};

export default Slide;
