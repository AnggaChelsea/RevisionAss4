import { FreeforallComponent } from './../../../../components/games/detailgames/freeforall/freeforall.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailgamesComponent } from '../../../../components/games/detailgames/detailgames.component';
import { ParticipantComponent } from '../../../../components/games/detailgames/participant/participant.component';
import { RegistertournamentComponent } from '../../../../components/games/detailgames/registertournament/registertournament.component';
import { BracketComponent } from '../../../../components/games/detailgames/bracket/bracket.component';
import { AuthGuard } from '../../../services/auth/auth.guard'

const routes: Routes = [
  { path: '', component: DetailgamesComponent },
  { path: 'participant', component: ParticipantComponent },
  { path: 'register', component: RegistertournamentComponent, canActivate:[AuthGuard], },
  { path: 'branches', component: BracketComponent },
  { path: 'freeforall', component: FreeforallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
