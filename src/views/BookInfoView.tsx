import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookInfo from '../components/BookInfo';
import { IBook } from '../interfaces/IBook.interface';

const bookStatic: IBook = {
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

const BookInfoPage = () => {
  // 23 Promise.resolve()
  // .then(() => {
  //   const resp = supabase
  //     .from<IBook>('books')
  //     .select()
  //     .eq('id', id)
  //     .limit(1);
  // });

  const params = useParams<{id: string}>();
  bookStatic.id = params.id;
  const [book] = useState<IBook>(bookStatic);

  return <BookInfo book={book} />;
};

export default BookInfoPage;
