import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './components/matches-view/matches/matches.component';
import { TeamsListsComponent } from './components/all-teams-view/all-teams-view-component/all-teams-view.component';
import { SingleTeamComponent } from './components/single-team-view/single-team/single-team.component';
import { SeasonComponent } from './components/season-view/season/season.component';
import { PlayersStatsComponent } from './components/players-view/players-stats/players-stats.component';
import { H2HComponent } from './components/matches-view/h2-h/h2-h.component';
import { GenerateGroupStageComponent } from './components/matches-view/generate-group-stage/generate-group-stage.component';
import { CreateMatchWrapperComponent } from './components/matches-view/create-match-wrapper/create-match-wrapper.component';
import { SeasonBySeasonComponent } from './components/global-stats-view/season-by-season/season-by-season.component';
import { AllTimeStatsComponent } from './components/global-stats-view/all-time-stats/all-time-stats.component';
import { WinnersWrapperComponent } from './components/global-stats-view/winners/winners-wrapper/winners-wrapper.component';
import { TopMatchesComponent } from './components/global-stats-view/top-records-matches/top-matches/top-matches.component';
import { TopFifaPlayersComponent } from './components/global-stats-view/top-fifa-players/top-fifa-players.component';

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
    { path: 'seasonBySeason', component: SeasonBySeasonComponent},
    { path: 'winners', component: WinnersWrapperComponent},
    { path: 'topMatches', component: TopMatchesComponent},
    { path: 'topFifaPlayers', component: TopFifaPlayersComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
