import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../models/company-model';
import { Sector } from '../models/sector-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private apiUrl:string;
  private apiPaths: {[apiName:string]: string};

  constructor(private httpClient:HttpClient) {
    this.apiUrl = environment.apiURL+"/sectors";
    this.apiPaths = {
      "getAllSectors":this.apiUrl+"/sector",
      "getCompanyBySector":this.apiUrl+"/companies"
    }
  }

  public getAllSectors():Observable<Sector[]>{
    return this.httpClient.get<Sector[]>(this.apiPaths.getAllSectors);
  }

  public getCompanyBySector(id:number):Observable<Company[]>{
    return this.httpClient.get<Company[]>(this.apiPaths.getCompanyBySector+"/"+id);
  }

}
