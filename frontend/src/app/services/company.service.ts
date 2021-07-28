import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company-model';
import { Stock } from '../models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl:string;
  private apiPaths: {[apiName:string]: string};

  constructor(private httpClient:HttpClient) {
    this.apiUrl = environment.apiURL+"/company";
    this.apiPaths = {
      "getAllCompanies":this.apiUrl+"/getCompany",
      "getCompanyById":this.apiUrl+"/getCompany",
      "getCompanyByName":this.apiUrl+"/getCompanyByPattern",
      "updateCompany":"http://localhost:8084/company"+"/updateCompany",
      "deleteCompany":"http://localhost:8084/company"+"/deleteCompany",
      "addCompany":"http://localhost:8084/company"+"/addCompany",
      "addStock":"http://localhost:8084/company"+"/stocks"
    }
  }

  public getAllCompanies():Observable<Company[]>{
    return this.httpClient.get<Company[]>(this.apiPaths.getAllCompanies);
  }

  public getCompanyByName(pattern:string):Observable<Company[]>{
    return this.httpClient.get<Company[]>(this.apiPaths.getCompanyByName+"/"+pattern);
  }

  public addCompany(company:Company):Observable<Company>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<Company>(this.apiPaths.addCompany, company, httpOptions);
  }

  public updateCompany(id:number, company:Company):Observable<Company>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.put<Company>(this.apiPaths.updateCompany+"/"+id, company, httpOptions);
  }

  public deleteCompany(id:number):Observable<Company>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.delete<Company>(this.apiPaths.deleteCompany+"/"+id, httpOptions);
  }

  public addStock(stock:Stock){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<Stock>(this.apiPaths.addStock, stock, httpOptions);
  }

  public getCompanyById(id:number):Observable<Company>{
    return this.httpClient.get<Company>(this.apiPaths.getCompanyById+"/"+id);
  }

}
