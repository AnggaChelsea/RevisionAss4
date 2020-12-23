import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignComponent } from '../assign/assign.component';
import { LurahComponent } from '../lurah.component';

const routes: Routes = [{path:'lurah', component:LurahComponent},{path:'assign', component:AssignComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LurahRoutingModule { }
