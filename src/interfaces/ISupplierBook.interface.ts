export interface ISupplierBook {
  id: string;
  title: string;
  description: string;
  publishedDate: string;
  isbn: string;
  imageLinks: string[];
  authors: string[];
  categories: string[];
  votesAmount: number;
  avgRating: number;
}
