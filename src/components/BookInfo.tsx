import { useState, FC } from 'react';
import { IBook } from '../interfaces/IBook.interface';
import Rating from './Rating';
import SpecificationTable from './SpecificationTable';
import Tablist from './Tablist';

interface IBookInfoProps {
  book: IBook
}

const BookInfoPage: FC<IBookInfoProps> = ({ book }) => {
  const [specsTabList] = useState([{
    key: 'Rok wydania',
    value: book.year.getFullYear().toString(),
  }, {
    key: 'ID',
    value: book.id,
  }, {
    key: 'Tytul',
    value: book.title,
  }, {
    key: 'ISBN',
    value: book.ISBN,
  }, {
    key: 'Autorzy',
    value: book.authors.join(' '),
  }]);

  const [tabList] = useState([{
    title: 'Szczegóły',
    content:
  <div className="flex justify-center p-1 md:p-4">
    <SpecificationTable items={specsTabList} />
  </div>,
  }]);

  return (
    <div className="w-11/12 m-auto mt-8">
      <div className="md:w-11/12 m-auto flex flex-wrap flex-col md:flex-row items-start">
        {/* todo: image z powiekszeniem po najechaniu (osobny component)*/}
        <img src={book.imageLinks[0]} alt="ok" className="m-auto md:w-1/3 max-h-56 object-scale-down" />
        <div className="md:w-2/3 flex-col lg:flex-row flex flex-wrap">
          <div className="lg:w-6/12 flex flex-auto flex-col">
            <span className="text-xl">{book.title}</span> <br />
            <div className="flex">
              <div className="w-1/2 text-gray-600">Podtytuł here</div>
              <div className="w-1/2 text-right text-gray-600">{book.authors}</div>
            </div>
            <div className="mt-12 text-sm text-gray-700 text-justify">
              {book.description}
            </div>
          </div>
          <div className="lg:w-2/12 mt-4 lg:m-0">
            <Rating bare={false} votesAmount={book.votesAmount} avgRating={book.avgRating} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 mt-8 m-auto">
        <Tablist tabs={tabList} defaultTab={0} />
      </div>
    </div>
  );
};

export default BookInfoPage;
