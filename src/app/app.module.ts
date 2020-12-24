import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { DataTablesModule } from 'angular-datatables';
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
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PanitiaService } from './shared/services/panitia/panitia.service';
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

  ],

  imports: [
    BrowserModule,
    DataTablesModule,
    MDBBootstrapModule,
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
  providers: [AuthService,PanitiaService , AuthGuard, TournamentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
