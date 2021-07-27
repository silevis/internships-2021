import React from 'react';
import SliderDemo from './SliderDemo';

const HomepageView = () => {
  return (
    <div className="container mx-auto flex flex-col bg-gray-200 shadow p-12 items-center gap-2 mt-16">
      <svg xmlns="http://www.w3.org/2000/svg" width="619" height="360" viewBox="0 0 619 360">
        <g transform="translate(-1315)">
          <circle cx="89.5" cy="89.5" r="89.5" transform="translate(1755)" fill="#fff7c6" />
          <circle cx="40" cy="40" r="40" transform="translate(1315)" fill="#fff7c6" />
          <circle cx="63" cy="63" r="63" transform="translate(1495 80)" fill="#e9e0ff" />
          <circle cx="49" cy="49" r="49" transform="translate(1643 262)" fill="#f1f1f1" />
        </g>
      </svg>
      <div className="flex flex-col gap-24 w-full">
        <div className="flex-inital self-start bg-gray-100 text-2xl shadow p-4 justify-self-start w-3/5">
          <span className="text-3xl font-bold">Who we are?</span><br />
          We are a group of enthusiasts who love books! Have you ever had a problem, when you couldn&apos;t get your hands on a rare book?
          Or maybe you just don&apos;t feel like going the public library? That&apos;s when our site comes into play!
          Simply by making an account you can get access to tons of great books. Just look if we have what interests you
          in stock and borrow it!
        </div>
        <div className="flex-inital self-end bg-gray-100 text-2xl shadow p-4 w-3/5">
          <span className="text-3xl font-bold">How does it work?</span><br />
          It&apos;s simple. You make an account, look for the book of your choice and borrow it! Then you get to keep it for a month,
          when the time passes you will need to return it.
        </div>
        <div className="flex-inital self-start bg-gray-100 text-2xl shadow p-4 w-3/5">
          <span className="text-3xl font-bold">Who we are?</span><br />
        </div>
        <div className="flex-inital bg-gray-100 text-2xl shadow p-4">
          Our top books:
          <span className="flex place-content-center"><SliderDemo /></span>
        </div>
      </div>
    </div>
  );
};

export default HomepageView;
