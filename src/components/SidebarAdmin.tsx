import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SidebarAdmin() {
  const [toggle, setToggled] = useState(true);

  return (
    <div className="flex justify-between bg-white">
      <div className={`bg-white inline z-40 ${toggle === true ? 'hidden' : 'fixed lg:static'}`}>
        <button
          type="button"
          className="border-gray-600 bg-white text-gray-600 border max-h-full px-1 mt-2 fixed inset-y-0 left-0
          transition duration-500 ease-in-out hover:bg-gray-400 hover:text-white lg:hidden"
          onClick={() => setToggled(!toggle)}
        >
          ⮜
        </button>
      </div>
      <div
        className={`lg:block z-30 inset-0 flex-none h-full w-8/12 sm:w-4/12 lg:h-auto bg-white ml-6 lg:mt-0 lg:ml-0 pb-10 lg:pt-0
        lg:w-60 xl:w-72 shadow-sm dark:bg-gray-800 overflow-y-auto lg:overflow-y-visible ${toggle === true ? 'hidden' : 'fixed lg:static'}`}
      >
        <div className="items-center justify-between scrolling-touch sticky top-16">
          <div className="border-b border-gray-400 mx-4 my-5 pl-2 text-l font-bold">
            Admin sidebar
          </div>
          <nav className="mx-4 my-3">
            <Link to="/admin/owned">
              <div className="border-b border-gray-200 mx-1 pl-4 pb-5 mt-5">
                In stock
              </div>
            </Link>
            <Link to="/admin/store">
              <div className="border-b border-gray-200 mx-1 pl-4 pb-5 mt-5">
                All goods
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <div className={`inline z-40 ${toggle === true ? 'fixed' : 'hidden'}`}>
        <button
          type="button"
          className="border-gray-600 bg-white text-gray-600 border max-h-full px-1 mt-2 fixed inset-y-0 left-0
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
