import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PanitiaService } from '../../services/panitia/panitia.service';
import { ParticipantService } from '../../services/participant/participant.service';
import { PanitiaComponent } from '../../../components/panitia/panitia.component';
import { ParticipantComponent } from '../../../components/panitia/participant/participant.component';
import { CreatetournamentComponent } from '../../../components/panitia/createtournament/createtournament.component';
import { CsvService } from '../../services/csv.service';
import { MaterialModule } from '../../../material/material.module';
import { ImageUploadModule } from "angular2-image-upload";
import { PanitiaRoutingModule } from './panitia-routing.module';
import { RoletournamentComponent } from '../../../components/panitia/roletournament/roletournament.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from '../../services/auth/auth.interceptor';

@NgModule({
  declarations: [
    CreatetournamentComponent,
    ParticipantComponent,
    PanitiaComponent,
    RoletournamentComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    PanitiaService, CsvService],
  imports: [
    CommonModule,
    ImageUploadModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    MaterialModule,
    PanitiaRoutingModule,
  ],
})
export class PanitiaModule {}
