import React, { FC } from 'react';
import SVGRatingIcon from './SVGRatingIcon';

const IconsAmount = 5;
export const MaxScoreFromAPI = 10;
const RatingIconURL = `${process.env.PUBLIC_URL}/star_border_black.svg`;
const RatingIconFilledURL = `${process.env.PUBLIC_URL}/star_black.svg`;

interface RatingProps {
  bare: boolean
  votesAmount: number | null
  avgRating: number
}

const Rating: FC<RatingProps> = ({ bare, votesAmount, avgRating }) => {
  const icons = [];
  const scorePerIcon = 100 / IconsAmount;

  let scoreRemaining = (avgRating / MaxScoreFromAPI) * 100;
  for (let i = 0; i < IconsAmount; i++) {
    icons.push(<SVGRatingIcon
      key={i}
      urlBlank={RatingIconURL}
      urlFull={RatingIconFilledURL}
      fillingPercent={Math.floor(Math.max(0, Math.min(100, scoreRemaining * IconsAmount)))}
    />);
    scoreRemaining -= scorePerIcon;
  }

  return (
    <div className="flex flex-wrap justify-center items-center flex-col">
      <div className="flex justify-between w-full h-full">
        {icons}
      </div>
      {!bare && <span className="text-gray-600 text-xs mt-1">Ilosc głosów: {votesAmount}</span>}
      {!bare && <span className="text-gray-600 text-xs mt-1">Srednia ocena: {Math.round(avgRating * 100) / 100}</span>}
    </div>
  );
};

export default Rating;
