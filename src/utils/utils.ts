import { toast } from 'react-toastify';
import { IBook } from '../interfaces/IBook.interface';

/**
 * TODO
 * ten plik zawiera i stałe, jak i jakieś funkcje, to powinno być wyodrębnione
 */

/**
 * TODO
 *  process.env.PUBLIC_URL -  takie zmienne czasem mogą być null - lepiej się przed tym zabezpieczyć za wczasu
 * niz otrzymać takie coś: `undefined/image-not-found.png`
 */
const DefaultImageUrl = `${process.env.PUBLIC_URL}/image-not-found.png`;

export const DefaultUserAvatarUrl = `${process.env.PUBLIC_URL}/defaultAvatar.png`;

export const getBookImage = (book: IBook): string => {
  if (book?.imageLinks?.length <= book.featuredImageId) return DefaultImageUrl;
  return book.imageLinks[book.featuredImageId];
};

export const warningToast = (msg: string, id: string) => {
  toast.warn(msg, {
    toastId: id,
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};

export const infoToast = (msg: string, id: string) => {
  toast.info(msg, {
    toastId: id,
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};

export const successToast = (msg: string, id: string) => {
  toast.success(msg, {
    toastId: id,
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};

export const errorToast = (msg: string, id: string) => {
  toast.error(msg, {
    toastId: id,
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};
