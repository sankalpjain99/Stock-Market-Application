import { Company } from "./company-model";
import { Exchange } from "./exchange-model";

export interface Ipo{
  id:number;
  company:Company;
  stockExchange:Exchange;
  pricePerShare:number;
  totalShares:number;
  dateTime:string;
  remarks:string;
}
