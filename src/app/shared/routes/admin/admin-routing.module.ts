import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../../../components/admin/admin.component'
import { CreatelurahComponent } from '../../../components/admin/createlurah/createlurah.component'

const routes: Routes = [
  {path:'', component:AdminComponent},
  {path:'createlurah', component:CreatelurahComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
