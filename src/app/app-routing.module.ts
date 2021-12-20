import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { TeamsListsComponent } from './teams-lists/teams-lists.component';
import { SingleTeamComponent } from './single-team/single-team.component';
import { SeasonComponent } from './season/season.component';
import { PlayersStatsComponent } from './players-stats/players-stats.component';
import { AllTimeStatsComponent } from './all-time-stats/all-time-stats.component';
import { H2HComponent } from './h2-h/h2-h.component';
import { GenerateGroupStageComponent } from './generate-group-stage/generate-group-stage.component';
import { CreateMatchWrapperComponent } from './create-match-wrapper/create-match-wrapper.component';

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
    { path: 'generateGroupStage', component: GenerateGroupStageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
