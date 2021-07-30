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
          <span className="sr-only">⮜</span>
        </>
        )}
      nextLabel={(
        <>
          <span aria-hidden="true">⮞</span>
          <span className="sr-only">⮞</span>
        </>
       )}
      // TODO make css classes for pagination
      previousClassName="page-item"
      previousLinkClassName="page-link btn-page bg-white"
      nextClassName="page-item"
      nextLinkClassName="page-link btn-page bg-white"
      containerClassName="flex flex-row"
      pageClassName="page-item mx-1 btn-page bg-white"
      pageLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
      // TODO make css classes for pagination
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      forcePage={currentPage}
      onPageChange={onPageChange}
    />
  );
};

export default Pagination;
