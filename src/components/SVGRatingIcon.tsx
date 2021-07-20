import React, { FC } from 'react';

interface SVGRatingIconProps {
  urlFull: string
  urlBlank: string
  fillingPercent: number
}

const SVGRatingIcon: FC<SVGRatingIconProps> = ({ urlBlank, urlFull, fillingPercent }) => {
  const fullIconStyle = {
    clipPath: `polygon(0 0, ${fillingPercent}% 0, ${fillingPercent}% 100%, 0 100%)`,
  };

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <div>
      {fillingPercent === 100 ? <img src={urlFull} alt="Filled ranking icon" /> : (
        <div className="grid grid-cols-1 grid-rows-1">
          <img src={urlFull} style={fullIconStyle} alt="Blank ranking icon" className="col-start-1 col-end-2 row-start-1 row-end-2" />
          <img src={urlBlank} alt="Blank ranking icon" className="col-start-1 col-end-2 row-start-1 row-end-2" />
        </div>
)}
    </div>
  );
};

export default SVGRatingIcon;
