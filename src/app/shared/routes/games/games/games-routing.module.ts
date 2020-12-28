import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailgamesComponent } from '../../../../components/games/detailgames/detailgames.component';
import { ParticipantComponent } from '../../../../components/games/detailgames/participant/participant.component';
import { RegistertournamentComponent } from '../../../../components/games/detailgames/registertournament/registertournament.component';

const routes: Routes = [
  {path:'', component:DetailgamesComponent},
  {path:'participant', component:ParticipantComponent},
  {path:'register', component:RegistertournamentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }