import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { AuthService } from './auth.service';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler // : Observable<HttpEvent<any>>
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    let authReq = req;
    if (token != null)
      // {
      authReq = req.clone({
        setHeaders: {
          access_token: token,
        },
      });
    return next.handle(authReq);
    // }
  }
}
