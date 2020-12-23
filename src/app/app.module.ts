import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ProfileModule } from './components/user-profile/profile.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LurahModule } from './components/lurah/lurahmodule/lurahmodule.module';


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
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ProfileModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LurahModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
