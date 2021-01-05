import { AuthModule } from './shared/routes/auth/auth.module';
import { SignComponent } from './components/auth/sign/sign.component';
import { AuthInterceptorInterceptor } from './shared/services/auth/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from 'angular-datatables';
import { MaterialModule } from './material/material.module';
import { AuthService } from './shared/services/auth/auth.service';
import { AuthGuard } from './shared/services/auth/auth.guard';
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
import { ProfileComponent } from './components/user-profile/profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TournamentService } from './shared/services/tournament/tournament.service';
import { PanitiaService } from './shared/services/panitia/panitia.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CdkTableExporterModule } from 'cdk-table-exporter';
import { ListtournamentComponent } from './components/panitia/listtournament/listtournament.component';
import { GroupComponent } from './components/group/group.component';
import { AllbracketComponent } from './components/games/allbracket/allbracket.component';
import { FreeforallComponent } from './components/games/detailgames/freeforall/freeforall.component';

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
    PageNotFoundComponent,
    ListtournamentComponent,
    GroupComponent,
    AllbracketComponent,
    FreeforallComponent,
  ],

  imports: [
    BrowserModule,
    NgbModule,
    Ng2SearchPipeModule,
    DataTablesModule,
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
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
