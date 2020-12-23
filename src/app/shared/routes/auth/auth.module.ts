import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmComponent } from '../../../components/auth/confirm/confirm.component';
import { ForgotComponent } from '../../../components/auth/forgot/forgot.component';
import { ResetComponent } from '../../../components/auth/reset/reset.component';
import { SignComponent } from '../../../components/auth/sign/sign.component';
import { SignupComponent } from '../../../components/auth/signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [SignComponent, SignupComponent, ForgotComponent, ResetComponent],
  imports: [
    CommonModule,
    MaterialModule ,
    HttpClientModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
