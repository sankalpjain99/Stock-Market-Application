import { Company } from "./company-model";
import { Exchange } from "./exchange-model";

export interface Stock{
  id:number;
  company:Company;
  stockExchange:Exchange;
  stockCode:string;
}
