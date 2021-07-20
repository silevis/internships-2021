import Rating from '../components/Rating';
import { IBook } from '../interfaces/IBook.interface';
import { IRatingData } from '../interfaces/IRatingData.interface';

const BookInfoPage = (props: { id: string; }) => {
  // Todo: get real book's info from an external source
  const book: IBook = {
    ISBN: '157356107X',
    authors: [
      'Sara D. Knapp',
    ],
    addedById: '1',
    addedYear: '2020',
    // eslint-disable-next-line max-len
    description: 'updated and expanded this invaluable resource. Unlike any other thesaurus available, this popular guide offers a wealth of natural language options in a convenient, A-to-Z format. It\'s ideal for helping users find the appropriate word or words for computer searches in the humanities, social sciences, and business. The second edition has added more than 9,000 entries to the first edition\'s extensive list. Now, the Thesaurus contains almost 21,000 search entries! New or expanded areas include broader coverage of business terms and humanities-including arts literature, philosophy, religion, and music',
    id: props.id,
    imageLinks: [
      'https://cdn-lubimyczytac.pl/upload/books/4810000/4810807/604880-352x500.jpg',
    ],
    title: 'The Contemporary Thesaurus of Search Terms and Synonyms',
    year: new Date(),
  };

  const bookRatingData: IRatingData = {
    votesAmount: 1,
    avgRating: 3.4,
  };

  // todo: make the design responsive
  return (
    <div className="w-11/12 m-auto mt-8">
      <div className="w-11/12 m-auto flex flex-wrap items-start">
        {/* todo: image z powiekszeniem po najechaniu (osobny component)*/}
        <img src={book.imageLinks[0]} alt="ok" className="w-1/3 max-h-56 object-scale-down" />
        <div className="w-2/3 flex flex-wrap">
          <div className="w-6/12 flex flex-auto flex-col">
            <span className="text-xl">{book.title}</span> <br />
            <div className="flex">
              <div className="w-1/2">Podtytuł here</div>
              <div className="w-1/2 text-right">{book.authors}</div>
            </div>
            <div className="mt-12 text-sm text-gray-700 text-justify">
              {book.description}
            </div>
          </div>
          <div className="w-2/12">
            <Rating bare={false} ratingData={bookRatingData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfoPage;
