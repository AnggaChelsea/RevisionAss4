import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDetailsComponent } from '../../../components/user-profile/profile-details/profile-details.component';
import { ProfileComponent } from '../../../components/user-profile/profile/profile.component';

const routes : Routes =[
    {path:'profile',component:ProfileComponent},
    {path:'profile-detail',component:ProfileDetailsComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProfileRoutingModule { }