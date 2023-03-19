export class GoalscorersModel {
    playerId: number;
    goalsByTeams; // todo check if needed
    name: string;
    numberOfTeamsPlayerScoredFor: number;
    teamPlayerScoredFor: string; // here probably array list would be better option
    totalGoalsCount: number;
}