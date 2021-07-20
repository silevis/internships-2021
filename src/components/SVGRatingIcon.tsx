import React, { FC } from 'react';
import './SVGRatingIcon.css';

interface SVGRatingIconProps {
  url: string
  fillingPercent: number
}

const SVGRatingIcon: FC<SVGRatingIconProps> = ({ url, fillingPercent }) => {
  console.log(fillingPercent);
  console.log(url);
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <span
      className="bg-green-300 h-5 w-5 select-none pointer-events-none rating-icon"
    />
  );
};

export default SVGRatingIcon;
