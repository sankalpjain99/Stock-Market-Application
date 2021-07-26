export interface Exchange{
  id:number;
  name:string;
  brief:string;
  remarks:string;
  address:{
    id?:number,
    street:string,
    city:string,
    country:string,
    zipCode:number
  }
}
