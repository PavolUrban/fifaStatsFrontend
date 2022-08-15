import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatchesComponent } from './components/matches-view/matches/matches.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { TeamsListsComponent } from './components/all-teams-view/teams-lists/teams-lists.component';
import {MatBadgeModule} from '@angular/material/badge';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NewTeamDialogComponent } from './components/all-teams-view/new-team-dialog/new-team-dialog.component';
import { SingleTeamComponent } from './components/single-team-view/single-team/single-team.component';
import { MatCardModule } from '@angular/material/card';
import { MatchDetailComponent } from './shared/components/match-detail/match-detail.component';
import { PieChartStatsComponent } from './shared/components/pie-chart-stats/pie-chart-stats.component';
import { SeasonComponent } from './components/season-view/season/season.component';
import { PlayersStatsComponent } from './components/players-view/players-stats/players-stats.component';
import { PlayOffComponent } from './components/season-view/play-off/play-off.component';
import { PlayerTeamsDialogComponent } from './shared/components/player-teams-dialog/player-teams-dialog.component';
import { GroupMatchesDialogComponent } from './components/season-view/group-matches-dialog/group-matches-dialog.component';
import { CustomMatchesComponent } from './shared/components/custom-matches/custom-matches.component';
import { OverallSeasonStatsComponent } from './components/season-view/overall-season-stats/overall-season-stats.component';
import { FinalMatchComponent } from './components/matches-view/final-match/final-match.component';
import { H2HComponent } from './components/matches-view/h2-h/h2-h.component';
import { WinnersListComponent } from './components/global-stats-view/winners/winners-list/winners-list.component';
import { TrophyRoomComponent } from './components/single-team-view/trophy-room/trophy-room.component';
import { ColumnChartComponent } from './shared/components/column-chart/column-chart.component';
import { PlayersCardsWrapperComponent } from './shared/components/players-cards-wrapper/players-cards-wrapper.component';
import { PlayersCardsComponent } from './shared/components/players-cards/players-cards.component';
import { SnackBarComponent } from './shared/components/snack-bar/snack-bar.component';
import { GenerateGroupStageComponent } from './components/matches-view/generate-group-stage/generate-group-stage.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CreateMatchWrapperComponent } from './components/matches-view/create-match-wrapper/create-match-wrapper.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GoalscorersWrapperComponent } from './shared/components/goalscorers-wrapper/goalscorers-wrapper.component';
import { GoalscorersTheNewestOneComponent } from './shared/components/goalscorers-the-newest-one/goalscorers-the-newest-one.component';
import { RecordInMatchComponent } from './components/matches-view/record-in-match/record-in-match.component';
import { SeasonBySeasonComponent } from './components/global-stats-view/season-by-season/season-by-season.component';
import { H2hSeasonBySeasonComponent } from './components/global-stats-view/h2h-season-by-season/h2h-season-by-season.component';
import { AllTimeTeamStatsComponent } from './components/global-stats-view/all-time-team-stats/all-time-team-stats.component';
import { AllTimeStatsComponent } from './components/global-stats-view/all-time-stats/all-time-stats.component';
import { CreateMatchComponent } from './components/matches-view/create-match/create-match.component';
import { WinnersWrapperComponent } from './components/global-stats-view/winners/winners-wrapper/winners-wrapper.component';
import { MatchesTableComponent } from './shared/components/matches-table/matches-table.component';
import { TeamTrophiesComponent } from './components/global-stats-view/winners/team-trophies/team-trophies.component';
import { TopMatchesComponent } from './components/global-stats-view/top-records-matches/top-matches/top-matches.component';



@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    TeamsListsComponent,
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
    GroupMatchesDialogComponent,
    CustomMatchesComponent,
    OverallSeasonStatsComponent,
    FinalMatchComponent,
    H2HComponent,
    CreateMatchComponent,
    WinnersListComponent,
    TrophyRoomComponent,
    ColumnChartComponent,
    PlayersCardsWrapperComponent,
    PlayersCardsComponent,
    SnackBarComponent,
    GenerateGroupStageComponent,
    CreateMatchWrapperComponent,
    GoalscorersWrapperComponent,
    GoalscorersTheNewestOneComponent,
    RecordInMatchComponent,
    SeasonBySeasonComponent,
    H2hSeasonBySeasonComponent,
    WinnersWrapperComponent,
    MatchesTableComponent,
    TeamTrophiesComponent,
    TopMatchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatBadgeModule,
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
    MatSnackBarModule,
    MatTooltipModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatExpansionModule,
    DragDropModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateMatchComponent,
    NewTeamDialogComponent,
    MatchDetailComponent,
    RecordInMatchComponent,
    PlayerTeamsDialogComponent,
    GroupMatchesDialogComponent
  ]
})
export class AppModule { }
