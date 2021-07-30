import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { IGoogleBooksAPIVolumes } from '../interfaces/IGoogleBooksAPIVolumes.interface';
import StoreBook from '../components/StoreBook';
import { errorToast } from '../utils/utils';
import Pagination from '../components/Pagination';

const BookListViewAdminStore = () => {
  const [dataAPI, setDataAPI] = useState<IGoogleBooksAPIVolumes>();
  const [filter, setFilter] = useState('book');
  const [index, setIndex] = useState(0);
  const formikFilter = useFormik({
    initialValues: {
      filter: '',
    },
    onSubmit: (values) => {
      setFilter(values.filter);
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${filter}&startIndex=${index}`);
        setDataAPI(res.data);
      } catch (e) {
        errorToast('There was a problem with fetching data!', 'API-error');
      }
    };
    fetchData();
  }, [filter, index]);
  const onPageChange = (selectedPage: { selected: number }) => {
    setIndex(selectedPage.selected * 10);
  };
  return (
    <div className="container mx-auto mt-3 shadow-inner">
      <form onSubmit={formikFilter.handleSubmit}>
        <input
          id="filter"
          name="filter"
          type="text"
          placeholder="Search"
          onChange={formikFilter.handleChange}
          className="input-pri mt-3 mx-6"
        />
      </form>
      <div>
        {dataAPI && dataAPI?.items.map((book) => (
          <StoreBook
            key={book.id ?? 'N/D'}
            id={book.id ?? 'N/D'}
            title={book.volumeInfo.title ?? 'N/D'}
            description={book.volumeInfo.description ?? 'N/D'}
            publishedDate={book.volumeInfo.publishedDate ?? 'N/D'}
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : `${process.env.PUBLIC_URL}/image-not-found.png`}
            authors={book.volumeInfo.authors}
            categories={book.volumeInfo.categories ?? ['N/D']}
            isbn={(book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier : 'N/D')}
          />
        ))}
      </div>
      <Pagination
        count={dataAPI?.totalItems ? dataAPI.totalItems : 10}
        pageSize={10}
        currentPage={index / 10}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default BookListViewAdminStore;
