import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { MatchesComponent } from './matches/matches.component';
import { TeamsListsComponent } from './teams-lists/teams-lists.component';
import { TestComponent } from './test/test.component';
import { SingleTeamComponent } from './single-team/single-team.component';
import { SeasonComponent } from './season/season.component';
import { PlayersStatsComponent } from './players-stats/players-stats.component';
import { AllTimeStatsComponent } from './all-time-stats/all-time-stats.component';
import { H2HComponent } from './h2-h/h2-h.component';

const routes: Routes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'customer', component: CustomersListComponent },
    { path: 'add', component: CreateCustomerComponent },
    { path: 'findbyage', component: SearchCustomersComponent },
    { path: 'matches', component: MatchesComponent},
    { path: 'h2h', component: H2HComponent},
    { path: 'teams', component: TeamsListsComponent},
    { path: 'fileTest', component: TestComponent},
    { path: 'teaminfo/:teamName', component: SingleTeamComponent},
    { path: 'season/:seasonname/:competition', component: SeasonComponent},
    { path: 'players', component: PlayersStatsComponent},
    { path: 'allTimeStats',component: AllTimeStatsComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
