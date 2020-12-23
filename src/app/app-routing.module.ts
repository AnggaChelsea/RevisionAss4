import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sign', loadChildren: () => import('./shared/routes/auth/auth.module').then(m => m.AuthModule)},
  {path:'profiles',loadChildren: () => import('../app/components/user-profile/profile.module').then(m => m.ProfileModule)},
  {path:'lurahs', loadChildren:()=>import('../app/components/lurah/lurahmodule/lurahmodule.module').then(m => m.LurahModule)},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
