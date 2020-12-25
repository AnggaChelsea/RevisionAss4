import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { DetailgamesComponent } from '../../../../components/games/detailgames/detailgames.component';
import { ParticipantComponent } from '../../../../components/games/detailgames/participant/participant.component';
import { RegistertournamentComponent } from '../../../../components/games/detailgames/registertournament/registertournament.component';
import { ParticipantService } from '../../../services/participant/participant.service';

@NgModule({
  declarations: [
    DetailgamesComponent,
    ParticipantComponent,
    RegistertournamentComponent,
  ],
  imports: [CommonModule, GamesRoutingModule],
  providers: [ParticipantService],
})
export class GamesModule {}
