export interface IBookBorrow {
  id: string;
  bookId: string;
  userId: string;
  date: Date;
  returnDate: Date;
}
