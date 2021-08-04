import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  count: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (selectedPage: { selected: number }) => void;
}

const Pagination: FC<PaginationProps> = ({ count, currentPage, pageSize, onPageChange }) => {
  const pageCount = Math.ceil(count / pageSize);

  return (
    <ReactPaginate
      previousLabel={(
        <>
          <span aria-hidden="true">⮜</span>
        </>
      )}
      nextLabel={(
        <>
          <span aria-hidden="true">⮞</span>
        </>
      )}
      previousClassName="rounded-sm bg-gray-200 text-gray-400 border border-gray-300 border-opacity-50 cursor-pointer
      transition duration-300 ease-in-out hover:text-indigo-500 hover:bg-gray-50
      dark:bg-gray-500 dark:hover:text-black"
      previousLinkClassName="w-full px-3"
      nextClassName="rounded-sm bg-gray-200 text-gray-400 border border-gray-300 border-opacity-50 cursor-pointer
      transition duration-300 ease-in-out hover:text-indigo-500 hover:bg-gray-50
      dark:bg-gray-500 dark:hover:text-black"
      nextLinkClassName="w-full px-3"
      containerClassName="flex flex-row"
      pageClassName="px-2 transition duration-300 ease-in-out hover:text-indigo-500 cursor-pointer dark:text-white dark:hover:text-black"
      activeLinkClassName="text-indigo-500 dark:text-black"
      disabledClassName="rounded-sm bg-gray-200 text-gray-400 border border-gray-300 border-opacity-50 opacity-25
      disabled:hover:text-gray-500 hover:bg-gray-200"
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      forcePage={currentPage}
      onPageChange={onPageChange}
    />
  );
};

export default Pagination;
