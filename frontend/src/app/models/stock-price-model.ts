import { Stock } from "./stock-model";

export interface StockPrice{
  id:number;
  stock:Stock;
  price:number;
  timestamp:string;
}
