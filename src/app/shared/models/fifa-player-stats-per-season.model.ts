import { Matches } from "./matches";

export class FifaPlayerStatsPerSeasonModel {
    allMatches: Array<Matches>;
    goalsCount: number;
    redCardsCount: number;
    seasonName: string;
    teamname: string;
    teamId: number;
    yellowCardsCount: number;
}