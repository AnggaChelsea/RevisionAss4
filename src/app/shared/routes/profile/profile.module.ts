import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../../components/user-profile/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDetailsComponent } from 'src/app/components/user-profile/profile-details/profile-details.component';

@NgModule({
    declarations: [ProfileComponent,ProfileDetailsComponent],
    imports: [
      CommonModule,
      ProfileRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class ProfileModule { }