import { GoalscorersModel } from "../goalscorers.model";
import { H2HPlayers } from "../H2HPlayers.model";
import { Matches } from "../matches";
import { OverallSeasonStats } from "../overall-season-stats.model";
import { PlayOffsModel } from "../play-offs.model";
import { TeamForTable } from "../team-for-table.model";

export class SeasonModel {
    overallStats: OverallSeasonStats;
    statsByGroups: Map<string, Array<H2HPlayers>>;
    goalscorersPerGroup: Map<string, Array<GoalscorersModel>>;
    totalGoalscorersGroupStage: Array<GoalscorersModel>;
    totalGoalscorersPlayOffs: Array<GoalscorersModel>;
    totalGoalscorersAllPhases: Array<GoalscorersModel>;
    groupStageTables: Map<string, Array<TeamForTable>>;
    playOffs: PlayOffsModel;
    final: Matches;
}