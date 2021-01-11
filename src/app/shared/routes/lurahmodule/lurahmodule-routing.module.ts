import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignComponent } from '../../../components/lurah/assign/assign.component';
import { LurahComponent } from '../../../components/lurah/lurah.component';

const routes: Routes = [{path:'lurah', component:LurahComponent},{path:'assign', component:AssignComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LurahRoutingModule { }
