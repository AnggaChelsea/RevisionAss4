import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LurahComponent } from '../../../components/lurah/lurah.component';
import { LurahRoutingModule } from './lurahmodule-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignComponent } from '../../../components/lurah/assign/assign.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from '../../services/auth/auth.interceptor';
import { LurahService } from '../../services/lurah/lurah.service';


@NgModule({
  declarations: [LurahComponent,AssignComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    LurahService
  ],
  imports:[CommonModule,LurahRoutingModule,FormsModule,ReactiveFormsModule]
 
})
export class LurahModule { }
