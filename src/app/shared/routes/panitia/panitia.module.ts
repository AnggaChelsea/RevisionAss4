import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from "ngx-spinner";
import { PanitiaService } from '../../services/panitia/panitia.service';
import { ParticipantService } from '../../services/participant/participant.service';
import { PanitiaComponent } from '../../../components/panitia/panitia.component';
import { ParticipantComponent } from '../../../components/panitia/participant/participant.component';
import { CreatetournamentComponent } from '../../../components/panitia/createtournament/createtournament.component';


import { PanitiaRoutingModule } from './panitia-routing.module';


@NgModule({
  declarations: [CreatetournamentComponent,ParticipantComponent,PanitiaComponent],
  providers:[PanitiaService],
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
    DataTablesModule,
    PanitiaRoutingModule
  ]
})
export class PanitiaModule { }
