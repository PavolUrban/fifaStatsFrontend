import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './components/matches-view/matches/matches.component';
import { TeamsListsComponent } from './components/all-teams-view/teams-lists/teams-lists.component';
import { SingleTeamComponent } from './single-team-view/single-team/single-team.component';
import { SeasonComponent } from './season-view/season/season.component';
import { PlayersStatsComponent } from './players-view/players-stats/players-stats.component';
import { H2HComponent } from './h2-h/h2-h.component';
import { GenerateGroupStageComponent } from './generate-group-stage/generate-group-stage.component';
import { CreateMatchWrapperComponent } from './create-match-wrapper/create-match-wrapper.component';
import { SeasonBySeasonComponent } from './global-stats/season-by-season/season-by-season.component';
import { AllTimeStatsComponent } from './global-stats/all-time-stats/all-time-stats.component';

const routes: Routes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'matches', component: MatchesComponent},
    { path: 'h2h', component: H2HComponent},
    { path: 'createMatch', component: CreateMatchWrapperComponent},
    { path: 'teams', component: TeamsListsComponent},
    { path: 'teaminfo/:teamName', component: SingleTeamComponent},
    { path: 'season/:seasonname/:competition', component: SeasonComponent},
    { path: 'players', component: PlayersStatsComponent},
    { path: 'allTimeStats',component: AllTimeStatsComponent},
    { path: 'generateGroupStage', component: GenerateGroupStageComponent},
    { path: 'seasonBySeason', component: SeasonBySeasonComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
