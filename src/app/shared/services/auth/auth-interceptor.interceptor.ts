import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
