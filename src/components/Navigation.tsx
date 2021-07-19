function Navigation() {
  return (
    <div>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300">
                Ksiazki
              </span>
            </div>

            <div className="flex md:hidden">
              <span
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400
                focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                aasddsddsasadsadsdasadsads
              </span>
            </div>
          </div>

          <div className="items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <span
                className="my-1 pl-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400
                md:mr-4 md:my-0 md:border-l md:border-gray-400"
              >
                Home
              </span>
              <span
                className="my-1 pl-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400
                md:mr-4 md:my-0 md:border-l md:border-gray-400"
              >
                User
              </span>
              <span
                className="my-1 px-4 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400
                md:mr-4 md:my-0 md:border-l md:border-r md:border-gray-400"
              >
                Admin
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
