import { H2HPlayers } from "./H2HPlayers.model";

export class OverallSeasonStats {
    matchesCount: Array<number>;
    goalsCount: Array<number>; 
    h2hPlayers: Array<H2HPlayers>;
    yellowCardsCount: Array<H2HPlayers>; 
    redCardsCount: Array<H2HPlayers>;
    winnerTeam: string;
    winnerPlayer: string;
  }
  