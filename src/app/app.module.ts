import { AuthModule } from './shared/routes/auth/auth.module';
import { SignComponent } from './components/auth/sign/sign.component';
import { AuthInterceptorInterceptor } from './shared/services/auth/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DataTablesModule } from 'angular-datatables';
import { MaterialModule } from './material/material.module';
import { AuthService } from './shared/services/auth/auth.service';
import { MatTableExporterModule } from 'mat-table-exporter';
// import { AuthGuard } from './shared/services/auth/auth.guard';
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
import { InboxComponent } from './components/auth/inbox/inbox.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TournamentService } from './shared/services/tournament/tournament.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PanitiaService } from './shared/services/panitia/panitia.service';
import { ListtournamentComponent } from './components/panitia/listtournament/listtournament.component';

@Injectable({
  providedIn: 'root',
})
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
    InboxComponent,
    ProfileComponent,
    SignComponent,
    ListtournamentComponent,
  ],

  imports: [
    BrowserModule,
    MatTableExporterModule,
    DataTablesModule,
    MDBBootstrapModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    NgxPaginationModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    AuthService,
    PanitiaService,
    TournamentService,
    // AuthGuard,
  ],
  bootstrap: [
    AppComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
})
export class AppModule {}
