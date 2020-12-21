import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders()
  .set(
    'Content-Types',
    'application/json',
  );
  datauser = {}

  constructor(private http:HttpClient, private router:Router ) { }

  private getUserdata(response:any){
    return response.data
  }


  signupUser(user:any){
    return this.http.post<any>(`${environment.urlAddress}users/register`, user)
  }

  signinUser(user:any){
    return this.http.post<any>(`${environment.urlAddress}users/login`, user)
  }

  login(){
    return !!localStorage.getItem('access_token')
  }

  getUsername(){
    return this.http.get<User[]>(environment.urlAddress + 'users').pipe(map(this.getUserdata))
  }


  logoutUser(){
    let removeToken = localStorage.removeItem('access_token');
    if(removeToken == null){
      this.router.navigate([''])
    }
  }

  get isLogin(): boolean{
      let token = localStorage.getItem('access_token');
      return (token !==null) ? true : false
  }

  getToken(){
      return localStorage.getItem('token');
  }

  // getUserProfile(_id:number): Observable<any>{
  //     let api = `${this.endpoint}user/${_id}`;
  //     return this.http.get(api,{
  //         headers: this.headers
  //     }).pipe(
  //         map((res: Response)=>{
  //             return res || {}
  //         }),
  //         catchError(this.handleError)
  //     )
  // }

  handleError(error:HttpErrorResponse){
        let pesan:string = '';

        if(error.error instanceof ErrorEvent){
            pesan = error.error.message

        }else{
            pesan = `Error code: ${error.status} \n Pesan Error: ${error.message}`;
        }
        return throwError(pesan);

  }


}
