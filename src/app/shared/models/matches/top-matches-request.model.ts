export interface TopMatchesRequestModel {
    recordType: string;
    selectedPlayer: string | null;
    selectedCompetition: string | null;
    teamId: number | null;
}