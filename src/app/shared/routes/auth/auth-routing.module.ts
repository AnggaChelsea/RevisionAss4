import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmComponent } from '../../../components/auth/confirm/confirm.component';
import { ForgotComponent } from '../../../components/auth/forgot/forgot.component';
import { ResetComponent } from '../../../components/auth/reset/reset.component';
import { SignComponent } from '../../../components/auth/sign/sign.component';
import { SignupComponent } from '../../../components/auth/signup/signup.component';


const routes: Routes = [
  {path:'', component:SignComponent},
  {path:'signup', component:SignupComponent},
  {path:'forget', component:ForgotComponent},
  {path:'reset', component:ResetComponent},
  {path:'confirm', component:ConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
