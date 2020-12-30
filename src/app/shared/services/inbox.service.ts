import inbox from './../models/inbox';
import { AuthService } from './auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class InboxService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  ACCESS_TOKEN = 'access_token';

  getNotification(): Observable<any> {
    return this.http.get<any>(
      `${environment.urlAddress}user/inboxNotifications`,
      {
        headers: new HttpHeaders().set(
          this.ACCESS_TOKEN,
          this.authService.getToken()
        ),
      }
    );
  }

  getInbox(): Observable<any> {
    return this.http.get<any>(`${environment.urlAddress}user/inbox`, {
      headers: new HttpHeaders().set(
        this.ACCESS_TOKEN,
        this.authService.getToken()
      ),
    });
    //   .pipe(
    //     map((res: Response | any) => {
    //       console.log(res);
    //       console.log(res.data[0]);
    //     }),
    //     catchError(this.authService.handleError)
    //   );
  }
}
