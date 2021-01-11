import { SignComponent } from './../../../components/auth/sign/sign.component';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
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
    // const id:any=this.signComponent.

    if (access_token != null) {
      const headerss = new HttpHeaders().set('Authorization', `Bearer${access_token}`)
      const authReq = request.clone({headers})
    } else {
      console.log('no access');
    }
    return next.handle(request);
  }
  
}
