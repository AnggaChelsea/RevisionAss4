import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Profile, subdistrict, update } from 'src/app/shared/models/Profile';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { group,delgroup } from '../../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  ACCESS_TOKEN = 'access_token';

  constructor(private http: HttpClient, private router: Router,private authService:AuthService) { }

  Creategroup(groupName:string,groupPict:File):Observable<any>{
    var formData: any = new FormData();
    formData.append("groupPict",groupName)
    formData.append("groupName",groupPict);

    return this.http.post<group>(`${environment.urlAddress}user/createGroup`, formData, {
      headers: new HttpHeaders().set(this.ACCESS_TOKEN,this.authService.getToken()),
      reportProgress: true,
      observe: 'events',
    })
  }
  DeleteGroup(group: delgroup){
    return this.http.delete(`${environment.urlAddress}user/demolishGroup`,{
    headers: new HttpHeaders().set(this.ACCESS_TOKEN,this.authService.getToken())})
  }
  getGroup(): Observable<any> {
    return this.http.get<any>(`${environment.urlAddress}user/group`, {headers: new HttpHeaders().set(this.ACCESS_TOKEN,this.authService.getToken())}).pipe(map((res: Response) => {
          return res || {};
        }),
      );
  }
}
