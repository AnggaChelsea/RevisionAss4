import { HallOfFameComponent } from './components/hall-of-fame/hall-of-fame.component';
import { GroupComponent } from './components/group/group.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/user-profile/profile/profile.component';
import { InboxComponent } from './components/auth/inbox/inbox.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/services/auth/auth.guard';
import { GamesComponent } from './components/games/games.component';
import { Role } from '../app/shared/models/role';
import { AllbracketComponent } from './components/games/allbracket/allbracket.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

const routes: Routes = [
  {
    path: 'sign',
    loadChildren: () =>
      import('./shared/routes/auth/auth.module').then((m) => m.AuthModule),
  },
   { path: 'hallOfFame', component: HallOfFameComponent },
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
    path: 'profiles',
    loadChildren: () =>
      import('./shared/routes/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
    canActivate: [AuthGuard],
    data: { role: [Role.comittee] },
  },
  {path:'lurahs', loadChildren:()=>import('./shared/routes/lurahmodule/lurahmodule.module')
  .then(m => m.LurahModule)},
  {path:'admin',component:AdminComponent},
  { path: 'search/:i', component: GamesComponent },
  {
    path: 'panitia',
    loadChildren: () =>
      import('./shared/routes/panitia/panitia.module').then(
        (m) => m.PanitiaModule
      ),
    canActivate: [AuthGuard], data: { roles: [Role.comittee] }
  },
  {
    path: 'detailgames/:_id',
    loadChildren: () =>
      import('./shared/routes/games/games/games.module').then(
        (m) => m.GamesModule
      ),
  },
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', component: LandingpageComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent },

  // { path: '**', component: PageNotFoundComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
