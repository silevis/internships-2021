import React from 'react';

const Slide = ({ title = '', author = '', image = '' }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-72 w-64 ">
      <img src={image} alt={title} className="w-48 h-64 overflow-hidden" />
      {title}
      <span className="text-gray-500 text-sm">{author}</span>
    </div>
  );
};

export default Slide;
