import { GroupComponent } from './components/group/group.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/user-profile/profile/profile.component';
import { InboxComponent } from './components/auth/inbox/inbox.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/services/auth/auth.guard';
import { GamesComponent } from './components/games/games.component';
import { AllbracketComponent } from './components/games/allbracket/allbracket.component';


const routes: Routes = [
  {
    path: 'sign',
    loadChildren: () =>
      import('./shared/routes/auth/auth.module').then((m) => m.AuthModule),
  },
  { path:'allbracket', component:AllbracketComponent },
  {
    path: 'inbox',
    component: InboxComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'group',
    component: GroupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'search/:i', component: GamesComponent },
  // {path:'sign', loadChildren: () => import('./shared/routes/auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'panitia',
    loadChildren: () =>
      import('./shared/routes/panitia/panitia.module').then(
        (m) => m.PanitiaModule
      ),
  },
  {
    path: 'detailgames/:_id',
    loadChildren: () =>
      import('./shared/routes/games/games/games.module').then(
        (m) => m.GamesModule
      ),
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
