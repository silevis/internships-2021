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
    <div className="w-full h-full">
      {fillingPercent === 100 ? <img src={urlFull} alt="Filled ranking icon" className="w-full h-full" /> : (
        <div className="grid grid-cols-1 grid-rows-1 w-full h-full">
          {fillingPercent !== 0
            && (
              <img
                src={urlFull}
                style={fullIconStyle}
                alt="Blank ranking icon"
                className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full"
              />
            )}
          <img
            src={urlBlank}
            alt="Blank ranking icon"
            className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default SVGRatingIcon;
