export interface IBookBorrow {
  bookId: string;
  profileId?: string;
  date: Date;
  returnDate: Date;
}
