import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
import { Profile, update } from 'src/app/shared/model/Profile';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) {}

  Createprofile(profile: Profile){
    return this.http.post<any>(`${environment.urlAddress}user/profile`, profile).subscribe((res:any)=>{
      Swal.fire('Good','Update Success','success').then(res =>{location.reload()})
    })
  }
  getProfile(): Observable<any> {
    return this.http.get<any>(`${environment.urlAddress}user/profile`, {
        headers: this.headers,}).pipe(map((res: Response) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
  }
  putProfile(update:update): Observable<any>{
  return this.http.put<any>(`${environment.urlAddress}user/profile`,update,{headers:this.headers})
  .pipe(map(response => console.log("response")))}  

handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.error instanceof ErrorEvent) message = error.error.message; 
    else message = `Error code : ${error.status} \n Message Error : ${error.message}`
    return throwError(message);
  }
}
