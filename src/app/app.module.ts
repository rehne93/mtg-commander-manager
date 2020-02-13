import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserOverviewComponent } from './user/user-overview/user-overview.component';
import { CreateSeasonComponent } from './season/create-season/create-season.component';
import { EditSeasonComponent } from './season/edit-season/edit-season.component';
import { SeasonOverviewComponent } from './season/season-overview/season-overview.component';
import { GameOverviewComponent } from './game-overview/game-overview.component';
import { ProfileComponent } from './user/profile/profile.component';
import { StatsComponent } from './user/stats/stats.component';
import { SeasonComponent } from './user/season/season.component';
import { CommandersComponent } from './user/commanders/commanders.component';
import { InfoComponent } from './game-overview/info/info.component';
import { PlayersComponent } from './game-overview/players/players.component';
import { LifeComponent } from './game-overview/life/life.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewTabsComponent } from './overview-tabs/overview-tabs.component';
import {MatFormFieldModule, MatInputModule, MatTabsModule, MatListModule} from '@angular/material';
import { UserTabsComponent } from './user/user-tabs/user-tabs.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommanderOverviewComponent } from './utility/commander/commander-overview/commander-overview.component';
import { StatsViewComponent } from './utility/stats-view/stats-view.component';
import { SingleCommanderViewComponent } from './utility/commander/single-commander-view/single-commander-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserOverviewComponent,
    CreateSeasonComponent,
    EditSeasonComponent,
    SeasonOverviewComponent,
    GameOverviewComponent,
    ProfileComponent,
    StatsComponent,
    SeasonComponent,
    CommandersComponent,
    InfoComponent,
    PlayersComponent,
    LifeComponent,
    OverviewTabsComponent,
    UserTabsComponent,
    CommanderOverviewComponent,
    StatsViewComponent,
    SingleCommanderViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    MatListModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
