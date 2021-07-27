import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exchange } from '../models/exchange-model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private apiUrl:string;
  private apiPaths: {[apiName:string]: string};

  constructor(private httpClient:HttpClient) {
    this.apiUrl = environment.apiURL+"/stockExchange";
    this.apiPaths = {
      "getAllExchanges":this.apiUrl+"/exchanges",
      "addExchange":"http://localhost:8082/stockExchange"+"/addExchange"
    }
  }

  public getAllExchanges():Observable<Exchange[]>{
    return this.httpClient.get<Exchange[]>(this.apiPaths.getAllExchanges);
  }

  public addExchange(exchange:Exchange):Observable<Exchange>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<Exchange>(this.apiPaths.addExchange, exchange, httpOptions);
  }

}
