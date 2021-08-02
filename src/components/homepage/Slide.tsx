import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../universal/Rating';

const Slide = ({ id = '', title = '', author = '', image = '', votesAmount = 0, avgRating = 0 }) => {
  return (
    <Link to={`/book/${id}`} className="flex flex-col justify-center items-center text-center">
      <div className="gallery-tile">
        <img src={image} alt={title} className="gallery-img" />
      </div>
      <div className="flex flex-col items-center h-auto">
        {title.length > 25 ? `${title.substr(0, 25).trim()}...` : title}
        <br />
        {author.length > 0 ? (
          <span className="text-gray-500 text-sm">{author.length > 20 ? `${author.substr(0, 20).trim()}...\n` : `${author}\n`}</span>
        ) : (
          <span className="text-gray-500 text-sm">No author</span>
        )}
        <div className="w-32 h-16">
          <Rating bare votesAmount={votesAmount} avgRating={avgRating} />
        </div>
      </div>
    </Link>
  );
};

export default Slide;
