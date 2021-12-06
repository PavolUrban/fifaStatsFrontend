import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatchesComponent } from './matches/matches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { TeamsListsComponent } from './teams-lists/teams-lists.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgApexchartsModule } from "ng-apexcharts";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


import { TestComponent } from './test/test.component';
import { NewTeamDialogComponent } from './new-team-dialog/new-team-dialog.component';
import { SingleTeamComponent } from './single-team/single-team.component';
import { MatCardModule } from '@angular/material/card';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { PieChartStatsComponent } from './pie-chart-stats/pie-chart-stats.component';
import { SeasonComponent } from './season/season.component';
import { PlayersStatsComponent } from './players-stats/players-stats.component';
import { PlayOffComponent } from './play-off/play-off.component';
import { AllTimeStatsComponent } from './all-time-stats/all-time-stats.component';
import { AllTimeTeamStatsComponent } from './all-time-team-stats/all-time-team-stats.component';
import { PlayerTeamsDialogComponent } from './player-teams-dialog/player-teams-dialog.component';
import { TeamTopGoalscorersComponent } from './team-top-goalscorers/team-top-goalscorers.component';
import { GoalscorersComponent } from './goalscorers/goalscorers.component';
import { GroupMatchesDialogComponent } from './group-matches-dialog/group-matches-dialog.component';
import { CustomMatchesComponent } from './custom-matches/custom-matches.component';
import { SeasonStatsComponent } from './season-stats/season-stats.component';
import { FinalMatchComponent } from './final-match/final-match.component';
import { H2HComponent } from './h2-h/h2-h.component';
import { CreateMatchComponent } from './create-match/create-match.component';
import { WinnersListComponent } from './winners-list/winners-list.component';
import { TrophyRoomComponent } from './trophy-room/trophy-room.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent,
    MatchesComponent,
    TeamsListsComponent,
    TestComponent,
    NewTeamDialogComponent,
    SingleTeamComponent,
    MatchDetailComponent,
    PieChartStatsComponent,
    SeasonComponent,
    PlayersStatsComponent,
    PlayOffComponent,
    AllTimeStatsComponent,
    AllTimeTeamStatsComponent,
    PlayerTeamsDialogComponent,
    TeamTopGoalscorersComponent,
    GoalscorersComponent,
    GroupMatchesDialogComponent,
    CustomMatchesComponent,
    SeasonStatsComponent,
    FinalMatchComponent,
    H2HComponent,
    CreateMatchComponent,
    WinnersListComponent,
    TrophyRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    MatSortModule,
    MatTooltipModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewTeamDialogComponent,
    MatchDetailComponent,
    PlayerTeamsDialogComponent,
    GroupMatchesDialogComponent
  ]
})
export class AppModule { }
