import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/user-profile/profile/profile.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sign', loadChildren: () => import('./shared/routes/auth/auth.module').then(m => m.AuthModule)},
  {path:'profiles',loadChildren: () => import('../app/components/user-profile/profile.module').then(m => m.ProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
