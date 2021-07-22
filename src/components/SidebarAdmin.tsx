import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SidebarAdmin() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const [toggle, setToggled] = useState(true);

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
            Magazine
          </div>
          <nav className="mx-4 my-3">
            <Link to="/admin/owned">
              <div className="border-b border-gray-200 mx-1 pl-4 pb-5 mt-5">
                Owned
              </div>
            </Link>
            <Link to="/admin/store">
              <div className="border-b border-gray-200 mx-1 pl-4 pb-5 mt-5">
                Store
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <div className={`inline z-40 ${toggle === true ? 'fixed' : 'hidden'}`}>
        <button
          type="button"
          className="border-gray-400 bg-white text-gray-400 rounded-md border max-h-full px-1 mt-2
            transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white lg:hidden"
          onClick={() => setToggled(!toggle)}
        >
          ⮞
        </button>
      </div>
    </div>
  );
}

export default SidebarAdmin;
