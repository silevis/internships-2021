import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SidebarAdmin() {
  const [toggle, setToggled] = useState(true);

  return (
    <div className="flex justify-between bg-white">
      <div className={`bg-white inline z-40 ${toggle ? 'hidden' : 'fixed lg:static'}`}>
        <button
          type="button"
          className="btn-sidebar"
          onClick={() => setToggled(!toggle)}
        >
          ⮜
        </button>
      </div>
      <div
        className={`lg:block z-30 inset-0 flex-none h-full lg:h-auto bg-white ml-6 lg:mt-0 lg:ml-0 pb-10 lg:pt-0
        w-72 shadow-sm dark:bg-gray-800 overflow-y-auto lg:overflow-y-visible ${toggle ? 'hidden' : 'fixed lg:static'}`}
      >
        <div className="items-center justify-between scrolling-touch fixed top-14 max-h-screen overflow-y-auto pb-8">
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
      <div className={`inline z-40 ${toggle ? 'fixed' : 'hidden'}`}>
        <button
          type="button"
          className="btn-sidebar"
          onClick={() => setToggled(!toggle)}
        >
          ⮞
        </button>
      </div>
    </div>
  );
}

export default SidebarAdmin;
