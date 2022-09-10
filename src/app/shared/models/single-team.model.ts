import { Matches } from "./matches";
import { TeamStatsModel } from "./team-stats.model";

export class SingleTeamModel {
    teamName: string;
    matches: Array<Matches>;
    teamStatsCL: TeamStatsModel;
    teamStatsEL: TeamStatsModel;
    teamStatsTotal: TeamStatsModel;
    bilance: Array<number>;
  }