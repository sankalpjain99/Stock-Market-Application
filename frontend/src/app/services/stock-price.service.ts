import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExcelData } from '../models/excel-data';
import { StockPrice } from '../models/stock-price-model';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  private apiUrl:string;
  private apiPaths: {[apiName:string]: string};

  constructor(private httpClient:HttpClient) {
    this.apiUrl = environment.apiURL;
    this.apiPaths = {
      "getStockPrice":this.apiUrl+"/company/getStockPrices",
      "addStockPrice":"http://localhost:8085"+"/excel/uploadData"
    }
  }

  public getStockPrices(companyId:number, exchangeId:number, from:string, to:string):Observable<StockPrice[]>{
    return this.httpClient.get<StockPrice[]>(this.apiPaths.getStockPrice+`/${companyId}/${exchangeId}/${encodeURIComponent(from)}/${encodeURIComponent(to)}`);
  }

  public addStockPrice(excelData:ExcelData[]):Observable<ExcelData[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<ExcelData[]>(this.apiPaths.addStockPrice, excelData, httpOptions);
  }
}
