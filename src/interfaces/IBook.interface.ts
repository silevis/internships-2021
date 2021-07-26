import { ISupplierBook } from './ISupplierBook.interface';

export interface IBook extends ISupplierBook {
  addedById: string;
  addedDate: Date | null;
  featuredImageId: number;
}
