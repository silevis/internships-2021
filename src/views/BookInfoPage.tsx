import { useState, FC } from 'react';
import Rating from '../components/Rating';
import SpecificationTable from '../components/SpecificationTable';
import Tablist from '../components/Tablist';
import { IBook } from '../interfaces/IBook.interface';

const book: IBook = {
  ISBN: '157356107X',
  authors: [
    'Sara D. Knapp',
  ],
  addedById: '1',
  addedYear: '2020',
  // eslint-disable-next-line max-len
  description: 'updated and expanded this invaluable resource. Unlike any other thesaurus available, this popular guide offers a wealth of natural language options in a convenient, A-to-Z format. It\'s ideal for helping users find the appropriate word or words for computer searches in the humanities, social sciences, and business. The second edition has added more than 9,000 entries to the first edition\'s extensive list. Now, the Thesaurus contains almost 21,000 search entries! New or expanded areas include broader coverage of business terms and humanities-including arts literature, philosophy, religion, and music',
  id: '1',
  imageLinks: [
    'https://cdn-lubimyczytac.pl/upload/books/4810000/4810807/604880-352x500.jpg',
  ],
  title: 'The Contemporary Thesaurus of Search Terms and Synonyms',
  year: new Date(),
  votesAmount: 1,
  avgRating: 3.4,
};

interface IBookInfoProps {
  id: string
}

const BookInfoPage: FC<IBookInfoProps> = ({ id }) => {
  // Promise.resolve()
  // .then(() => {
  //   const resp = supabase
  //     .from<IBook>('books')
  //     .select()
  //     .eq('id', id)
  //     .limit(1);
  //     console.log(resp);
  // });

  // const [book] = useState<IBook>(resp.data);
  const [specsTabList] = useState([{
    key: 'Rok wydania',
    value: book.year.getFullYear().toString(),
  }, {
    key: 'ID',
    value: id,
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

  // todo: make the design responsive
  return (
    <div className="w-11/12 m-auto mt-8">
      <div className="md:w-11/12 m-auto flex flex-wrap flex-col md:flex-row items-start">
        {/* todo: image z powiekszeniem po najechaniu (osobny component)*/}
        <img src={book.imageLinks[0]} alt="ok" className="m-auto md:w-1/3 max-h-56 object-scale-down" />
        <div className="md:w-2/3 flex-col md:flex-row flex flex-wrap">
          <div className="md:w-6/12 flex flex-auto flex-col">
            <span className="text-xl">{book.title}</span> <br />
            <div className="flex">
              <div className="w-1/2 text-gray-600">Podtytuł here</div>
              <div className="w-1/2 text-right text-gray-600">{book.authors}</div>
            </div>
            <div className="mt-12 text-sm text-gray-700 text-justify">
              {book.description}
            </div>
          </div>
          <div className="md:w-2/12 mt-4 md:m-0">
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
