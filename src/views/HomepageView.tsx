import React from 'react';
import SliderDemo from './SliderDemo';

const HomepageView = () => {
  return (
    <div className="container mx-auto flex flex-col bg-gray-100 shadow p-12 items-center gap-2 mt-16">
      <SliderDemo />
      <div className="bg-white shadow-xl p-5 max-w-full">
        <h2 className="text-size-48">What is this site for?</h2>
        <h4>This site is your online library! We have a lot of books you can borrow and enjoy :giga_chad: anytime. </h4>
      </div>
    </div>
  );
};

export default HomepageView;
