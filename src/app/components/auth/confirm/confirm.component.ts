import Swal from 'sweetalert2';
import { SignComponent } from './../sign/sign.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  confirmForm: FormGroup;
  tokens: any = {};
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.confirmForm = this.fb.group({
      token: [''],
    });
  }

  ngOnInit(): void {}

  confirmUser() {
    var value = this.confirmForm.value.token;

    this.tokens = { verifyingToken: value };

    this.authService.confirmUser(this.tokens).subscribe(
      (success) => {
        Swal.fire({
          icon: 'success',
          title: 'Verification code accepted',
          text: `Please re login`,
        });
        return this.router.navigate(['sign/signin']);
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
