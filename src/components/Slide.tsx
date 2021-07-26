import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({ id = '', title = '', author = '', image = '' }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-72 w-64 ">
      <Link to={`/book/${id}`}>
        <img src={image} alt={title} className="w-48 h-64 overflow-hidden" />
        {title}
        <br />
        <span className="text-gray-500 text-sm">{author}</span>
      </Link>
    </div>
  );
};

export default Slide;
