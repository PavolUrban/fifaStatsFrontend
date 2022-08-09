import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
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

import { NewTeamDialogComponent } from './new-team-dialog/new-team-dialog.component';
import { SingleTeamComponent } from './single-team-view/single-team/single-team.component';
import { MatCardModule } from '@angular/material/card';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { PieChartStatsComponent } from './shared/components/pie-chart-stats/pie-chart-stats.component';
import { SeasonComponent } from './season-view/season/season.component';
import { PlayersStatsComponent } from './players-view/players-stats/players-stats.component';
import { PlayOffComponent } from './play-off/play-off.component';
import { PlayerTeamsDialogComponent } from './player-teams-dialog/player-teams-dialog.component';
import { TeamTopGoalscorersComponent } from './team-top-goalscorers/team-top-goalscorers.component';
import { GroupMatchesDialogComponent } from './group-matches-dialog/group-matches-dialog.component';
import { CustomMatchesComponent } from './shared/components/custom-matches/custom-matches.component';
import { OverallSeasonStatsComponent } from './season-view/overall-season-stats/overall-season-stats.component';
import { FinalMatchComponent } from './final-match/final-match.component';
import { H2HComponent } from './h2-h/h2-h.component';
import { WinnersListComponent } from './global-stats/winners-list/winners-list.component';
import { TrophyRoomComponent } from './single-team-view/trophy-room/trophy-room.component';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';
import { PlayersCardsWrapperComponent } from './players-cards-wrapper/players-cards-wrapper.component';
import { PlayersCardsComponent } from './players-cards/players-cards.component';
import { SnackBarComponent } from './shared/components/snack-bar/snack-bar.component';
import { GenerateGroupStageComponent } from './generate-group-stage/generate-group-stage.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CreateMatchWrapperComponent } from './create-match-wrapper/create-match-wrapper.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GoalscorersWrapperComponent } from './goalscorers-wrapper/goalscorers-wrapper.component';
import { GoalscorersTheNewestOneComponent } from './goalscorers-the-newest-one/goalscorers-the-newest-one.component';
import { RecordInMatchComponent } from './record-in-match/record-in-match.component';
import { SeasonBySeasonComponent } from './global-stats/season-by-season/season-by-season.component';
import { H2hSeasonBySeasonComponent } from './global-stats/h2h-season-by-season/h2h-season-by-season.component';
import { AllTimeTeamStatsComponent } from './global-stats/all-time-team-stats/all-time-team-stats.component';
import { AllTimeStatsComponent } from './global-stats/all-time-stats/all-time-stats.component';
import { CreateMatchComponent } from './components/create-match/create-match.component';



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
    TeamTopGoalscorersComponent,
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
    H2hSeasonBySeasonComponent
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
