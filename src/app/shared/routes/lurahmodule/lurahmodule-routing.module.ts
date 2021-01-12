import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsvComponent } from 'src/app/components/lurah/csv/csv.component';
import { AssignComponent } from '../../../components/lurah/assign/assign.component';
import { LurahComponent } from '../../../components/lurah/lurah.component';

const routes: Routes = [{path:'lurah', component:LurahComponent},{path:'assign', component:AssignComponent},{path:'csv',component:CsvComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LurahRoutingModule { }
