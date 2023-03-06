export interface RecordsInMatchesModel {
    // id
    matchId: number;
    playerId: number;
    playerTeamId: number;
    teamRecordId: number;
    typeOfRecord: string;
    minuteOfRecord: number | null;
  }