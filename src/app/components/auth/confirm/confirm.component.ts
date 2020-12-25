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
    var value = this.confirmForm.value;
    console.log('broken');

    console.log(this.tokens);

    this.authService.confirmUser(this.tokens).subscribe(
      (success) => {
        console.log('masuk success');
        console.log(success);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
