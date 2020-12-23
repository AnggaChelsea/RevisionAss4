import { AuthModule } from './shared/routes/auth/auth.module';
import { SignComponent } from './components/auth/sign/sign.component';
import { AuthInterceptorInterceptor } from './shared/services/auth/auth-interceptor.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmComponent } from './components/auth/confirm/confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';
import { GamesComponent } from './components/games/games.component';
import { DetailgamesComponent } from './components/games/detailgames/detailgames.component';
import { SearchgameComponent } from './components/games/searchgame/searchgame.component';
import { AdminComponent } from './components/admin/admin.component';
import { InboxComponent } from './components/auth/inbox/inbox.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    DetailgamesComponent,
    SearchgameComponent,
    AdminComponent,
    InboxComponent,
    ProfileComponent,
    SignComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
