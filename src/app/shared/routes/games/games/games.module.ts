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
import { FreeforallComponent } from '../../../../components/games/detailgames/freeforall/freeforall.component';
import { BracketComponent } from '../../../../components/games/detailgames/bracket/bracket.component';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from 'src/app/shared/services/auth/auth.interceptor';


@NgModule({
  declarations: [
    DetailgamesComponent,
    ParticipantComponent,
    RegistertournamentComponent,
    BracketComponent,
    FreeforallComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    ParticipantService, TournamentService, AuthService,],
})
export class GamesModule {}
