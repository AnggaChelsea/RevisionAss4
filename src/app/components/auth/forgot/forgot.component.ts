import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
})
export class ForgotComponent implements OnInit {
  emailForm: FormGroup;
  email: any = {};
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.emailForm = this.fb.group({
      email: [''],
    });
  }

  ngOnInit(): void {}

  sendForgot() {
    var value = this.emailForm.value.email;

    this.email = { email: value };

    this.authService.forgotPass(this.email).subscribe(
      (success) => {
        console.log(success);
        Swal.fire({
          icon: 'success',
          title: 'please check your email',
          html: `an email has been sent to <a href="https://mail.google.com/" target="_blank">${success.email}</a>`,
          // text: `${success.message}`,
        });
        this.router.navigate(['sign/reset']);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
