import { SignComponent } from './../../../components/auth/sign/sign.component';
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
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    const access_token: any = this.authService.getToken();
    if (access_token != null) {
      const authReq = request.clone({
        // setHeaders: { access_token },
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
          Authorization: access_token,
        },
      });
    } else {
      console.log('no access');
    }
    return next.handle(request);
  }
}
