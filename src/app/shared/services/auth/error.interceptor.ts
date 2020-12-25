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
<<<<<<< HEAD:src/app/shared/services/auth/auth-interceptor.interceptor.ts
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
=======
export class ErrorInterceptor implements HttpInterceptor {
>>>>>>> f47779c590d677aaaae79ed531e6fbea6c3c25b6:src/app/shared/services/auth/error.interceptor.ts

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
