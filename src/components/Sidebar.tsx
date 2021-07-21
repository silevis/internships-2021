import React, { useState, useContext } from 'react';
import uIDContext from './UIdContext';

function Sidebar() {
  const [value, setValue] = useState(0);
  const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event?.target?.value));
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const context = useContext(uIDContext);

  return (
    <div
      className="fixed z-40 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto
      lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden shadow-sm dark:bg-gray-800"
    >
      <div className="items-center justify-between overflow-y-auto scrolling-touch">
        <div className="border-b border-gray-400 mx-4 my-5 pl-2 text-l font-bold">
          Filters
        </div>
        <nav className="mx-4 my-3">
          <div className="border-b border-gray-200 mx-1 pb-5 mt-5">
            <label htmlFor="searchbar" className="mr-2">Search</label>
            <input
              type="text"
              placeholder="Enter book name"
              id="searchbar"
              className="p-1 placeholder-gray-400 text-gray-600 border outline-none"
            />
          </div>
          <div className="border-b border-gray-200 mx-1 pl-4 pb-5 mt-5">
            <ul className="list-disc">
              <li>{context}</li>
              <li>Fiction</li>
              <li>Literature of fact, journalism</li>
              <li>Popular science literature</li>
              <li>Children&apos;s literature</li>
              <li>Comics</li>
              <li>Poetry, drama satire</li>
              <li>Other</li>
            </ul>
          </div>
          <div className="border-b border-gray-200 mx-1 pl-4 pb-5 mt-5">
            <input type="range" min="0" max="10" onChange={handleSlideChange} />
            <span className="ml-2" id="range">{value}</span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
