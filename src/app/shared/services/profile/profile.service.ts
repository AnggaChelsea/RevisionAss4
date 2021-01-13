import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Profile, subdistrict, update } from 'src/app/shared/models/Profile';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  ACCESS_TOKEN = 'access_token';
  
  constructor(private http: HttpClient, private router: Router,private authService:AuthService) {}


  Createprofile(birthDate:Date,subDistrict:string,phoneNumber:number,
    fullname:string,picture:File):Observable<any>{
    var formData: any = new FormData();
    formData.append("birthDate",birthDate);
    formData.append("subDistrict",subDistrict)
    formData.append("phoneNumber",phoneNumber)
    formData.append("fullname",fullname)
    formData.append("picture", picture);

    return this.http.post<Profile>(`${environment.urlAddress}user/profile`, formData, {
      headers: new HttpHeaders().set(this.ACCESS_TOKEN,this.authService.getToken()),
      reportProgress: true,
      observe: 'events',
    })
  }
  getProfile(): Observable<any> {
    return this.http.get<any>(`${environment.urlAddress}user/profile`, {headers: new HttpHeaders().set(this.ACCESS_TOKEN,this.authService.getToken())}).pipe(map((res: Response) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }
  putProfile(fullname:string,picture:File): Observable<any>{
    var fd:any = new FormData();
    fd.append("fullname",fullname);
    fd.append("picture",picture)
  return this.http.put<update>(`${environment.urlAddress}user/profile`,fd,{headers: new HttpHeaders().set(this.ACCESS_TOKEN,this.authService.getToken()),reportProgress: true,
    observe: 'events',})
  .pipe(map(response => console.log(response)))}  

  errorMgmt(error: HttpErrorResponse):Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
