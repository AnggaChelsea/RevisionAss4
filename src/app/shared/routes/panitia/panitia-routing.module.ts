import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanitiaComponent } from '../../../components/panitia/panitia.component';
import { ParticipantComponent } from '../../../components/panitia/participant/participant.component';
import { CreatetournamentComponent } from '../../../components/panitia/createtournament/createtournament.component';


const routes: Routes = [
  {path:'', component:PanitiaComponent},
  {path:'participant', component:ParticipantComponent},
  {path:'createtournament', component:CreatetournamentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanitiaRoutingModule { }
