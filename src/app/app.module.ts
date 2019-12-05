import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { CreateSeasonComponent } from './create-season/create-season.component';
import { EditSeasonComponent } from './edit-season/edit-season.component';
import { SeasonOverviewComponent } from './season-overview/season-overview.component';
import { GameOverviewComponent } from './game-overview/game-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserOverviewComponent,
    CreateSeasonComponent,
    EditSeasonComponent,
    SeasonOverviewComponent,
    GameOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
