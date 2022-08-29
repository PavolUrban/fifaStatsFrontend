import { Matches } from "./matches";

export class PlayOffsMatchModel {
    nonQualifiedTeam: string;
    nonQualifiedTeamGoals: number;
    qualifiedTeam: string;
    qualifiedTeamGoals: number;
    firstMatch: Matches;
    secondMatch: Matches;
}