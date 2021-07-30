import React from 'react';
import SliderDemo from '../../views/SliderDemo';

const HomepageSliderSection = () => {
    return (
      <div className="flex w-full flex-row justify-evenly text-2xl p-4">
        <div className="flex-col items-center">
          Our top books:
          <SliderDemo type="top" />
        </div>
        <div id="spacer" />
        <div className="flex-col items-center">
          Some of our books:
          <SliderDemo type="random" />
        </div>
      </div>
    );
};

export default HomepageSliderSection;
