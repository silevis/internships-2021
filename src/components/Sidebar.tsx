function Sidebar() {
  return (
    <div
      className="fixed z-40 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto
      lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden shadow-sm dark:bg-gray-800"
    >
      <div className="items-center justify-between overflow-y-auto scrolling-touch">
        <div className="border-b border-gray-400 mx-4 my-3 pl-2 text-l font-bold">
          Filtry
        </div>
        <nav className="mx-4 my-3 pl-4">
          <ul className="list-disc">
            <li>
              <input type="text" className="shadow-xl" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
