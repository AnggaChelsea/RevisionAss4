import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  isAdmin: boolean = false;
  isHeadChief: boolean = false;
  isPanitia: boolean = false;
  isParticipant: boolean = false;
  isUser: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user:any = this.authService.getUser()
    if (user) {
      if(route.data.role && route.data.role.indexOf(user.role) === -1 ){
        this.router.navigate(['']);
        return false;
      }
      
      return true;

    } 
    else {
      this.router.navigate(['/signin']);
      return false;
    }
  }

  // RoleActive(): void {
  //   this.authService.getUser().subscribe((data)=>{
  //     if (data.role === 'admin') {
  //       this.isAdmin = true;
  //     } else if (data.role === 'headchief') {
  //       this.isHeadChief = true;
  //     } else if (data.role === 'comittee') {
  //       this.isPanitia = true;
  //     } else if (data.role === 'participant') {
  //       this.isParticipant = true;
  //     } else if (data.role === 'user') {
  //       this.isUser = true;
  //     }
  //   })
  // }

}
