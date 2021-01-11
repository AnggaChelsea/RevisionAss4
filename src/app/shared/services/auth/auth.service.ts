import { User } from './user';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

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

  getToken(): any {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  setToken(token: string) {
    localStorage.setItem(this.ACCESS_TOKEN, token);
    return this.router.navigate(['profile']);
  }

  loggedIn() {
    return !!localStorage.getItem(this.ACCESS_TOKEN);
  }

  getUser() {
    return this.http.get<any>(`${environment.urlAddress}user/profile`, {
      headers: new HttpHeaders().set(this.ACCESS_TOKEN, this.getToken()),
    });
  }

  getRole(){
    let reqheaders = new HttpHeaders({'No-Auth': 'True'});
    return this.http.get(environment.urlAddress + 'user/profile', {headers:reqheaders})
  }

  forgotPass(email: any) {
    return this.http.post<any>(`${environment.urlAddress}user/forget`, email);
  }

  resetPass(data: any) {
    return this.http.post<any>(`${environment.urlAddress}user/reset`, data);
  }


  logout() {
    localStorage.removeItem(this.ACCESS_TOKEN);
    return this.router.navigate(['']);
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