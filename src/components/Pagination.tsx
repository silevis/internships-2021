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
      // previousLabel={(
      //   <>
      //     <span aria-hidden="true">‹</span>
      //     <span className="sr-only">Previous</span>
      //   </>
      // )}
      // nextLabel={(
      //   <>
      //     <span aria-hidden="true">›</span>
      //     <span className="sr-only">Next</span>
      //   </>
      // )}
      // TODO make css classes for pagination
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      containerClassName="pagination"
      pageClassName="page-item"
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
