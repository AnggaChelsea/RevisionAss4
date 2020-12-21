import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AuthService } from './shared/services/auth/auth.service';
import { AuthGuard } from './shared/services/auth/auth.guard';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmComponent } from './components/auth/confirm/confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';
import { GamesComponent } from './components/games/games.component';
import { AdminComponent } from './components/admin/admin.component';
import { TournamentService } from './shared/services/tournament/tournament.service';
import { PanitiaComponent } from './components/panitia/panitia.component';
import { ParticipantService } from './shared/services/participant/participant.service';
import { ParticipantComponent } from './components/panitia/participant/participant.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ConfirmComponent,
    BannerComponent,
    GamesComponent,
    AdminComponent,
    PanitiaComponent,
    ParticipantComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule, FormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgxPaginationModule,
    MaterialModule,FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard, TournamentService, ParticipantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
