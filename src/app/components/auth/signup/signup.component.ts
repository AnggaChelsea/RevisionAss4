import { AuthService } from './../../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  registerUser: any = {};
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signUpForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  register() {
    var value = this.signUpForm.value;

    this.registerUser = {
      username: value.username,
      email: value.email,
      password: value.password,
    };

    this.authService.signupUser(this.registerUser).subscribe(
      (success) => {
        console.log(success.data.email);
        Swal.fire({
          icon: 'success',
          title: 'Check your inbox for verification code',
          html: `an email has been sent to <a href="https://mail.google.com/" target="_blank">${success.data.email}</a>`,
          // text: `${success.message}`,
        });
        this.router.navigate(['sign/signin']);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.error.message}`,
        });
      }
    );
  }
}
