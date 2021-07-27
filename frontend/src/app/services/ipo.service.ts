import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipo } from '../models/ipo-model';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  private apiUrl:string;
  private apiPaths: {[apiName:string]: string};

  constructor(private httpClient:HttpClient) {
    this.apiUrl = environment.apiURL+"/company";
    this.apiPaths = {
      "getAllIpos":this.apiUrl+"/getIpo",
      "getIpoByCompany":this.apiUrl+"/getIpo",
      "updateIpo":"http://localhost:8084/company"+"/updateIpo",
      "addIpo":"http://localhost:8084/company"+"/addIpo"
    }
  }

  public getAllIpos():Observable<Ipo[]>{
    return this.httpClient.get<Ipo[]>(this.apiPaths.getAllIpos);
  }

  public getIpoByCompany(id:number):Observable<Ipo>{
    return this.httpClient.get<Ipo>(this.apiPaths.getIpoByCompany+"/"+id);
  }

  public addIpo(ipo:Ipo):Observable<Ipo>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<Ipo>(this.apiPaths.addIpo, ipo, httpOptions);
  }

  public updateIpo(id:number, ipo:Ipo):Observable<Ipo>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.put<Ipo>(this.apiPaths.updateIpo+"/"+id, ipo, httpOptions);
  }

}
