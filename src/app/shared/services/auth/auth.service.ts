import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { User } from '../../models/user';
import { Role } from '../../models/role';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  datauser = {};
  ACCESS_TOKEN = 'access_token';

  constructor(private http: HttpClient, private router: Router) {}

  signIn(user: any) {
    return this.http.post<any>(`${environment.urlAddress}user/signin`, user);
  }

  confirmUser(user: any) {
    return this.http.post<any>(`${environment.urlAddress}user/confirm`, user);
  }

  signupUser(user: any) {
    return this.http.post<any>(`${environment.urlAddress}user/signup`, user);
  }

  getToken() {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  setToken(token: string) {
    return localStorage.setItem(this.ACCESS_TOKEN, token);
  }

  handleError(error: HttpErrorResponse) {
    let pesan: string = '';

    if (error.error instanceof ErrorEvent) {
      pesan = error.error.message;
    } else {
      pesan = `Error code: ${error.status} \n Pesan Error: ${error.message}`;
    }
    return throwError(pesan);
  }
}
