import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Assign } from '../../models/Lurah';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LurahService {
  ACCESS_TOKEN = 'access_token';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient:HttpClient, private authService: AuthService) {}
  assign(assign:Assign): Observable<any> {
    return this.httpClient.put(`${environment.urlAddress}/chief/assign`,assign,{headers: new HttpHeaders().set(this.ACCESS_TOKEN,this.authService.getToken())});
  }
}
