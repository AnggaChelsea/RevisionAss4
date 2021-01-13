import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreategroupComponent } from 'src/app/components/group/creategroup/creategroup.component';
import { DeletegroupComponent } from 'src/app/components/group/deletegroup/deletegroup.component';
import { GroupComponent } from 'src/app/components/group/group.component';
import { GroupRoutingModule } from './group-routing.module';


@NgModule({
    declarations: [CreategroupComponent,DeletegroupComponent,GroupComponent],
    imports: [
      CommonModule,
      GroupRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
export class GroupModule { }
