import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent implements OnInit {
  resetForm: FormGroup;
  resetPass: any = {};
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.resetForm = this.fb.group({
      email: [''],
      resetLink: [''],
      newPassword: [''],
    });
  }

  ngOnInit(): void {}

  reset() {
    var value = this.resetForm.value;

    this.resetPass = {
      email: value.email,
      resetLink: value.resetLink,
      newPassword: value.newPassword,
    };

    this.authService.resetPass(this.resetPass).subscribe(
      (success) => {
        Swal.fire({
          icon: 'success',
          title: 'successfully changes password',
          text: `${success.message}`,
        });
        this.router.navigate(['sign/signin']);
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
