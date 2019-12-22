import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {UserOverviewComponent} from './user/user-overview/user-overview.component';
import {CreateSeasonComponent} from './season/create-season/create-season.component';
import {EditSeasonComponent} from './season/edit-season/edit-season.component';
import {SeasonOverviewComponent} from './season/season-overview/season-overview.component';
import {GameOverviewComponent} from './game-overview/game-overview.component';
import {ProfileComponent} from './user/profile/profile.component';
import {StatsComponent} from './user/stats/stats.component';
import {SeasonComponent} from './user/season/season.component';
import {CommandersComponent} from './user/commanders/commanders.component';
import {InfoComponent} from './game-overview/info/info.component';
import {PlayersComponent} from './game-overview/players/players.component';
import {LifeComponent} from './game-overview/life/life.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: 'userView', component: UserOverviewComponent, children: [
            {path: 'profile', component: ProfileComponent},
            {path: 'stats', component: StatsComponent},
            {path: 'season', component: SeasonComponent},
            {path: 'commanders', component: CommandersComponent}
        ]
    },
    {path: 'createSeason', component: CreateSeasonComponent},
    {path: 'editSeason', component: EditSeasonComponent},
    {path: 'seasonOverview', component: SeasonOverviewComponent},
    {
        path: 'gameOverview', component: GameOverviewComponent, children: [
            {path: 'info', component: InfoComponent},
            {path: 'players', component: PlayersComponent},
            {path: 'life', component: LifeComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
