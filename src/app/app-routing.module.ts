import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/services/auth/auth.guard';
import { DetailgamesComponent } from './components/games/detailgames/detailgames.component';
import { GamesComponent } from './components/games/games.component';
import { PanitiaComponent } from './components/panitia/panitia.component';

const routes: Routes = [
  {path:'', component:HomeComponent},

  {path:'search/:keyword', component:GamesComponent},
  {path:'panitia', component:PanitiaComponent},
  {path:'sign', loadChildren: () => import('./shared/routes/auth/auth.module').then(m => m.AuthModule)},
  {path:'detailgames/:_id', loadChildren: () => import('./shared/routes/games/games/games.module').then(m => m.GamesModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
