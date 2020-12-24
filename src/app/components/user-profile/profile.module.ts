import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileRoutingModule } from './profile-routing.module';

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