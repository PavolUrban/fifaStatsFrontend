import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GeneralRouterService {

    constructor(private router: Router) { }

    goToTeamView(teamId: number): void {
        this.router.navigate(['/teaminfo/' + teamId])
    }

    goToSeasonView(season: string, competition: string): void {
        this.router.navigate(['/season/' + season + "/" + competition]);
    }
}
