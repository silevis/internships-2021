function Sidebar() {
  return (
    <div
      className="fixed z-40 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto
      lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden shadow-sm dark:bg-gray-800"
    >
      <div className="items-center justify-between overflow-y-auto scrolling-touch">
        <div className="border-b border-gray-400 mx-4 my-5 pl-2 text-l font-bold">
          Filtry
        </div>
        <nav className="mx-4 my-3">
          <div className="border-b border-gray-200 mx-1 pb-5 mt-5">
            <label htmlFor="searchbar" className="mr-2">Search</label>
            <input
              type="text"
              placeholder="Insert book name"
              id="searchbar"
              className="p-1 placeholder-gray-400 text-gray-600 border outline-none"
            />
          </div>
          <div className="border-b border-gray-200 mx-1 pl-4 pb-5 mt-5">
            <ul className="list-disc">
              <li>Beletrystyka</li>
              <li>Literatura faktu, publicystyka</li>
              <li>Literatura popularnonaukowa</li>
              <li>Literatura dziecięca</li>
              <li>Komiksy</li>
              <li>Poezja, dramat, satyra</li>
              <li>Pozostałe</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
