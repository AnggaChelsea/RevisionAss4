import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../../components/home/home.component'
import { HomeRoutingModule } from './home-routing.module';
import { GamesComponent } from 'src/app/components/games/games.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { SignComponent } from 'src/app/components/auth/sign/sign.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { PanitiaService } from '../../services/panitia/panitia.service';
import { TournamentService } from '../../services/tournament/tournament.service';
import { AuthService } from '../../services/auth/auth.service';


@NgModule({
  declarations: [HomeComponent, GamesComponent, 
    SignComponent, PageNotFoundComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers:[PanitiaService, AuthService,
    TournamentService,]
})
export class HomeModule { }
