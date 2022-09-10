import { Matches } from "./matches";

export class PlayOffsMatchModel {
    nonQualifiedTeam: string;
    nonQualifiedTeamGoals: number;
    qualifiedTeam: string;
    qualifiedTeamGoals: number;
    qualifiedPlayer: string;
    matchesList: Array<Matches>;
}