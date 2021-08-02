import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IBook } from '../interfaces/IBook.interface';
import { getCategories } from './Filtering';

let filterType: keyof IBook = 'title';
let chosenCat = '*';

const setFilterType = (type: keyof IBook) => {
  filterType = type;
};

const handleCatChange = (category: string) => {
  chosenCat = category;
};
export const getFilterType = () => {
  return filterType;
};
export const getCat = () => {
  return chosenCat;
};

const Sidebar = () => {
  const [value, setValue] = useState(0);
  const [query, setQuery] = useState('*');
  const [toggle, setToggled] = useState(true);
  const [categories, setCategories] = useState<string[]>();
  const history = useHistory();
  const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event?.target?.value));
  };
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (String(event?.target?.value).length > 0) setQuery(String(event?.target?.value));
    else setQuery('*');
  };

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className={`bg-white inline z-40 ${toggle ? 'hidden' : 'fixed lg:static'}`}>
        <button
          type="button"
          className="btn-sidebar lg:hidden"
          onClick={() => setToggled(!toggle)}
        >
          ⮜
        </button>
      </div>
      <div
        className={`lg:block z-30 inset-0 flex-none min-h-screen h-full lg:h-auto bg-white ml-6 lg:mt-0 lg:ml-0 pb-10 lg:pt-0
        w-72 shadow-sm dark:bg-gray-800 overflow-y-auto lg:overflow-y-visible ${toggle ? 'hidden' : 'fixed lg:static'}`}
      >
        <div className="items-center justify-between scrolling-touch fixed top-14 max-h-screen overflow-y-auto pb-8">
          <div className="border-b border-gray-400 mx-4 my-5 pl-2 text-l font-bold">
            Filters
          </div>
          <nav className="mx-4 mt-3 mb-10">
            <div className="flex-col border-b border-gray-200 mx-1 pb-5 mt-5">
              <label htmlFor="searchbar" className="mr-2">Search</label>
              <input
                type="text"
                placeholder="Enter book name"
                id="searchbar"
                className="input-alt"
                onChange={handleQueryChange}
              />
              <div className="flex justify-evenly mt-2">
                <input type="radio" name="type" id="title" value="title" onChange={() => setFilterType('title')} defaultChecked />
                Filter by title
                <input type="radio" name="type" id="author" value="author" onChange={() => setFilterType('authors')} />Filter by author
              </div>
            </div>
            <div className="border-b border-gray-200 mx-1 pl-4 pb-5 mt-5">
              <span className="font-bold">Categories</span>
              <ul className="list-none">
                <li>
                  <input type="radio" name="cat" value="*" defaultChecked onClick={() => handleCatChange('*')} /> All
                </li>
                {categories?.map((category) => (
                  <li key={category}>
                    <input type="radio" name="cat" value={category} onClick={() => handleCatChange(category)} />
                    {` ${category}`}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col border-b border-gray-200 mx-1 pl-4 pb-5 mt-5 items-center">
              <span className="font-bold"> Ratings </span>
              <input type="range" min="0" max="10" defaultValue="0" onChange={handleSlideChange} />
              <span className="ml-2" id="range">{value > 0 ? value : 'All'}</span>
            </div>
            <div className="flex border-b border-gray-200 mx-1 pl-4 pb-5 mt-5 place-content-center">
              <button
                className="btn-page w-2/3"
                type="button"
                onClick={() => history.replace(`/books-list/${query}/${value}`)}
              >
                Filter
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className={`inline z-40 ${toggle ? 'fixed' : 'hidden'}`}>
        <button
          type="button"
          className="btn-sidebar lg:hidden"
          onClick={() => { setToggled(!toggle); }}
        >
          ⮞
        </button>
      </div>
    </>
  );
};

export default Sidebar;
