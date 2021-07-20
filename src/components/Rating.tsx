import React, { FC } from 'react';
import { IRatingData } from '../interfaces/IRatingData.interface';
import SVGRatingIcon from './SVGRatingIcon';

const IconsAmount = 5;
export const MaxScoreFromAPI = 5;
const RatingIconURL = `${process.env.PUBLIC_URL}/star_border_black.svg`;
const RatingIconFilledURL = `${process.env.PUBLIC_URL}/star_black.svg`;

interface RatingProps {
  bare: boolean
  ratingData: IRatingData
}

const Rating: FC<RatingProps> = ({ bare, ratingData }) => {
  const icons = [];
  const scorePerIcon = 100 / IconsAmount;

  let scoreRemaining = (ratingData.avgRating / MaxScoreFromAPI) * 100;
  for (let i = 0; i < IconsAmount; i++) {
    icons.push(<SVGRatingIcon
      urlBlank={RatingIconURL}
      urlFull={RatingIconFilledURL}
      fillingPercent={Math.floor(Math.max(0, Math.min(100, scoreRemaining * IconsAmount)))}
    />);
    scoreRemaining -= scorePerIcon;
  }

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="flex">
        {icons}
      </div>
      {!bare && <span>Ilosc głosów: {ratingData.votesAmount}</span>}
    </div>
  );
};

export default Rating;
