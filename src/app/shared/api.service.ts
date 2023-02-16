import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { companymodel } from '../Model/companymodel';
import { techtracks } from '../Model/techtracks';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiurl = 'https://localhost:7260/api/Assign';

  Getallcomapny(): Observable<companymodel[]> {
    return this.http.get<companymodel[]>(this.apiurl);
  }

  GetCompanybycode(id: number): Observable<companymodel[]> {

    return this.http.get<companymodel[]>('https://localhost:7260/api/Assign/GetResourceHistoryById'+'/'+id);
     //return this.http.get<companymodel[]>(this.apiurl+'/GetResourceHistoryById'+'/'+id);
     //https://localhost:7260/api/Assign
    
    //return this.http.get<companymodel[]>('https://localhost:7260/api/Assign/GetResourceHistoryById/'+id);
  }

  RemoveCompanybycode(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }

  CreateComapny(companydata: any) {
    return this.http.post(this.apiurl, companydata);
  }

  UpdateComapny(id: any, companydata: any) {
    return this.http.put(this.apiurl + '/' + id, companydata);
  }

  getProgramDropDown():Observable<any>{
    return this.http.get<techtracks[]>("https://localhost:7260/api/ProgramTracker/GetTechTracks");
  }


}
