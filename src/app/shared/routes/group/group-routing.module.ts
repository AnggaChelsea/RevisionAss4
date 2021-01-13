import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreategroupComponent } from 'src/app/components/group/creategroup/creategroup.component';
import { DeletegroupComponent } from 'src/app/components/group/deletegroup/deletegroup.component';
import { GroupComponent } from 'src/app/components/group/group.component';

const routes: Routes = [{path:'group',component:GroupComponent},{path:'create',component:CreategroupComponent},{path:'delete',component:DeletegroupComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
