import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'userView', component: AppComponent},
    {path: 'createSeason', component: AppComponent},
    {path: 'editSeason', component: AppComponent},
    {path: 'seasonOverview', component: AppComponent},
    {path: 'gameOverview', component: AppComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
