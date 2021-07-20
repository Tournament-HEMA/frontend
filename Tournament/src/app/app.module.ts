import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CurrentFightComponent } from './pages/current-fight/current-fight.component';
import { MainComponent } from './pages/main/main.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { PeopleFormComponent } from './pages/people-form/people-form.component';
import { JudgesFormComponent } from './pages/judges-form/judges-form.component';
import { AddingMembersComponent } from './pages/adding-members/adding-members.component';
import { Tournamen1Component } from './pages/tournamen1/tournamen1.component';
import { Tournamen2Component } from './pages/tournamen2/tournamen2.component';
import { Tournament3Component } from './pages/tournament3/tournament3.component';
import {RouterModule, Routes} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CurrentFightComponent,
    MainComponent,
    TournamentComponent,
    PeopleFormComponent,
    JudgesFormComponent,
    AddingMembersComponent,
    Tournamen1Component,
    Tournamen2Component,
    Tournament3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
