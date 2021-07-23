import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Sidebar() {
  const [value, setValue] = useState(0);
  const [query, setQuery] = useState('*');
  const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event?.target?.value));
  };
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (String(event?.target?.value).length > 0) setQuery(String(event?.target?.value));
    else setQuery('*');
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const [toggle, setToggled] = useState(true);

  const history = useHistory();

  // useEffect(() => {
  // }, [query]);

  return (
    <div className="flex justify-between">
      <div className={`inline z-40 ${toggle === true ? 'hidden' : 'fixed'}`}>
        <button
          type="button"
          className="border-gray-400 bg-white text-gray-400 rounded-md border max-h-full px-1 mt-2
            transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white lg:hidden"
          onClick={() => setToggled(!toggle)}
        >
          ⮜
        </button>
      </div>
      <div
        className={`lg:block z-30 inset-0 flex-none h-full bg-opacity-25 w-full lg:h-auto
      lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 shadow-sm dark:bg-gray-800 ${toggle === true ? 'hidden' : ''}`}
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
                onChange={handleQueryChange}
              />
            </div>
            <div className="border-b border-gray-200 mx-1 pl-4 pb-5 mt-5">
              <ul className="list-disc">
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
              <span className="ml-2" id="range">{value > 0 ? value : 'All'}</span>
            </div>
            <div className="flex border-b border-gray-200 mx-1 pl-4 pb-5 mt-5 place-content-center">
              <button
                className="transition duration-500 ease-in-out border text-gray-400 border-gray-200 p-2 w-2/3
                hover:bg-gray-400 hover:text-gray-100"
                type="button"
                onClick={() => history.push(`/books-list/${query}/${value}`)}
              >
                Filtruj
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className={`inline z-40 ${toggle === true ? 'fixed' : 'hidden'}`}>
        <button
          type="button"
          className="border-gray-400 bg-white text-gray-400 rounded-md border max-h-full px-1 mt-3
            transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white lg:hidden"
          onClick={() => { setToggled(!toggle); }}
        >
          ⮞
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
