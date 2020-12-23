import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Assign } from '../../model/Lurah';

@Injectable({
  providedIn: 'root'
})
export class LurahService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient:HttpClient) {}
  assign(assign:Assign): Observable<any> {
    return this.httpClient.put(`${environment.urlAddress}/chief/assign`,assign, {
      headers: this.headers});
  }
}
