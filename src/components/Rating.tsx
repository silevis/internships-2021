import React, { FC } from 'react';
import SVGRatingIcon from './SVGRatingIcon';

const IconsAmount = 5;
export const MaxScoreFromAPI = 5;
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
      urlBlank={RatingIconURL}
      urlFull={RatingIconFilledURL}
      fillingPercent={Math.floor(Math.max(0, Math.min(100, scoreRemaining * IconsAmount)))}
    />);
    scoreRemaining -= scorePerIcon;
  }

  return (
    <div className="flex flex-wrap justify-center items-center flex-col md:flex-row">
      <div className="flex">
        {icons}
      </div>
      {!bare && <span>Ilosc głosów: {votesAmount}</span>}
    </div>
  );
};

export default Rating;
