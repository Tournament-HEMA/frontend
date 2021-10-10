import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {LoginComponent} from "./pages/login/login.component";
import {CurrentFightComponent} from "./pages/current-fight/current-fight.component";
import {TournamentComponent} from "./pages/tournament/tournament.component";
import {PeopleFormComponent} from "./pages/people-form/people-form.component";
import {JudgesFormComponent} from "./pages/judges-form/judges-form.component";
import {AddingMembersComponent} from "./pages/adding-members/adding-members.component";
import { Tournamen1Component } from './pages/tournamen1/tournamen1.component';
import { Tournamen2Component } from './pages/tournamen2/tournamen2.component';
import { Tournament3Component } from './pages/tournament3/tournament3.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'tournament',component:TournamentComponent},
  {path:'tournament/current-fight',component:CurrentFightComponent},
  {path:'people-form/adding-members',component:AddingMembersComponent},
  {path:'tournament/tournament1',component:Tournamen1Component},
  {path:'tournament/tournament2',component:Tournamen2Component},
  {path:'tournament/tournament3',component:Tournament3Component},
  {path:'people-form',component:PeopleFormComponent},
  {path:'judges-form',component:JudgesFormComponent},
  {path:'adding-members',component:AddingMembersComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
