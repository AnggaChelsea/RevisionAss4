import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LurahComponent } from '../lurah.component';
import { LurahRoutingModule } from './lurahmodule-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignComponent } from '../assign/assign.component';


@NgModule({
  declarations: [LurahComponent,AssignComponent],
  imports: [
    CommonModule,
    LurahRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LurahModule { }
