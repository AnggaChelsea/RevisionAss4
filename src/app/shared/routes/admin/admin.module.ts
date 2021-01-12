import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../../../components/admin/admin.component'
import { CreatelurahComponent } from '../../../components/admin/createlurah/createlurah.component'
import { AdminRoutingModule } from './admin-routing.module';
import { AuthInterceptorInterceptor } from '../../services/auth/auth.interceptor';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent,CreatelurahComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers:[AuthInterceptorInterceptor, AuthService]
})
export class AdminModule { }
