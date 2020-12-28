import Swal from 'sweetalert2';
import { User } from './../../../shared/services/auth/user';
import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
})
export class SignComponent implements OnInit {
  signInForm: FormGroup;
  user: any = {};
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signInForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  loginUser() {
    var value = this.signInForm.value;
    var cond = value.email;
    var password = value.password;
    if (cond.includes('@')) {
      this.user = {
        email: cond,
        password: password,
      };
    } else {
      this.user = {
        username: cond,
        password: password,
      };
    }

    this.authService.signIn(this.user).subscribe(
      (success) => {
        if (success.role === 'unregistered') {
          this.router.navigate(['sign/confirm']);
        } else {
          this.authService.setToken(success.access_token);
          Swal.fire({
            icon: 'success',
            title: 'Log in success',
            text: `Welcome and happy trophy hunting`,
          });
          this.router.navigate(['']);
        }
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.error.message}`,
        });
      }
    );
  }
}
