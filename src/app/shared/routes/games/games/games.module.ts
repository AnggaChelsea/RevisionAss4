import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GamesRoutingModule } from './games-routing.module';
import { DetailgamesComponent } from '../../../../components/games/detailgames/detailgames.component';
import { ParticipantComponent } from '../../../../components/games/detailgames/participant/participant.component';
import { RegistertournamentComponent } from '../../../../components/games/detailgames/registertournament/registertournament.component';
import { ParticipantService } from '../../../services/participant/participant.service';
import { TournamentService } from '../../../services/tournament/tournament.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DetailgamesComponent,
    ParticipantComponent,
    RegistertournamentComponent,
  ],
  imports: [CommonModule, GamesRoutingModule, ReactiveFormsModule, FormsModule, NgxPaginationModule ],
  providers: [ParticipantService,TournamentService],
})
export class GamesModule {}
