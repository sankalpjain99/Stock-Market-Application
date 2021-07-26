import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StockPrice } from '../models/stock-price-model';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  private apiUrl:string;
  private apiPaths: {[apiName:string]: string};

  constructor(private httpClient:HttpClient) {
    this.apiUrl = environment.apiURL+"/company";
    this.apiPaths = {
      "getStockPrice":this.apiUrl+"/getStockPrices"
    }
  }

  public getStockPrices(companyId:number, exchangeId:number, from:string, to:string):Observable<StockPrice[]>{
    return this.httpClient.get<StockPrice[]>(this.apiPaths.getStockPrice+`/${companyId}/${exchangeId}/${encodeURIComponent(from)}/${encodeURIComponent(to)}`);
  }
}
