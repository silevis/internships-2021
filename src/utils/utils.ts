import { IBook } from '../interfaces/IBook.interface';

const DefaultImageUrl = `${process.env.PUBLIC_URL}/image-not-found.png`;

export const getBookImage = (book: IBook): string => {
  if (book?.imageLinks?.length <= book.featuredImageId) return DefaultImageUrl;
  return book.imageLinks[book.featuredImageId];
}
