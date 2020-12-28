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
<<<<<<< HEAD
=======
import { CsvService } from '../../services/csv.service';


>>>>>>> 5a5917775cf7cabc87cdd1ac0177463982682e20
import { PanitiaRoutingModule } from './panitia-routing.module';

@NgModule({
<<<<<<< HEAD
  declarations: [
    CreatetournamentComponent,
    ParticipantComponent,
    PanitiaComponent,
  ],
  providers: [PanitiaService],
  imports: [CommonModule, DataTablesModule, PanitiaRoutingModule],
=======
  declarations: [CreatetournamentComponent,ParticipantComponent,PanitiaComponent],
  providers:[PanitiaService,CsvService],
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
    DataTablesModule,
    PanitiaRoutingModule
  ]
>>>>>>> 5a5917775cf7cabc87cdd1ac0177463982682e20
})
export class PanitiaModule {}
