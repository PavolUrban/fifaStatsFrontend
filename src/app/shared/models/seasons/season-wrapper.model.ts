import { GoalscorersModel } from "../goalscorers.model";
import { H2HPlayers } from "../H2HPlayers.model";
import { Matches } from "../matches";
import { PlayOffsMatchModel } from "../play-offs-match.model";
import { TeamForTable } from "../team-for-table.model";

export interface SeasonWrapper {
    groupStage: GroupStageModel;
    playOffs: PlayOffStageModel;
    finalMatch: Matches;
    topGoalscorersGroupStage: GoalscorersModel[];
    topGoalsScorersPlayOffs: GoalscorersModel[];
    topGoalsScorersTotal: GoalscorersModel[];
}

export interface GroupStageModel {
    groupsList: SingleGroup[];
}

export interface SingleGroup {
    groupName: string;
    groupTable: TeamForTable[];
    goalscorersList: GoalscorersModel[];
    h2hPlayers: H2HPlayers;
}

export interface PlayOffStageModel {
    playOffRounds: PlayOffRound[];
}

export interface PlayOffRound {
    roundName: string;
    duels: PlayOffsMatchModel[];
    h2hPlayers: H2HPlayers;
}
