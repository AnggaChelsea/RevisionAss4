import { ProfileComponent } from './components/auth/profile/profile.component';
import { InboxComponent } from './components/auth/inbox/inbox.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'sign',
    loadChildren: () =>
      import('./shared/routes/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'inbox',
    component: InboxComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
