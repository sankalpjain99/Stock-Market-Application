import { Sector } from "./sector-model";

export interface Company{
  id:number;
  name:string;
  turnover:number;
  ceo:string;
  brief:string;
  bod:string;
  sector:Sector;
}
