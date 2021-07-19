import { IBook } from '../interfaces/IBook.interface'

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
      'http://books.google.pl/books?id=zYw3sYFtz9kC&dq=search+terms&hl=&source=gbs_api',
    ],
    title: 'The Contemporary Thesaurus of Search Terms and Synonyms',
    year: new Date(),
  };

  return (
    <div className="w-11/12 m-auto">
      <div className="w-11/12 m-auto flex-row flex-wrap flex-auto">
        {/* todo: image z powiekszeniem po najechaniu (osobny component)*/}
        <img alt="ok" className="w-4/12" />
        <div className="w-6/12">
          <span>{book.title}</span> <br />
          <span>subtitle</span>
        </div>
        <div className="w-2/12">
          ocena
        </div>
      </div>
      <div className="w-4/5 m-auto">
        szczegóły
      </div>
    </div>
  );
};

export default BookInfoPage;
