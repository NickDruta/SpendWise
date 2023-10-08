import { CategoryRecord } from "../CategoryRecord/CategoryRecord";

export interface ProductRecord {
  product: string;
  date: Date;
  category: CategoryRecord;
  price: number;
}