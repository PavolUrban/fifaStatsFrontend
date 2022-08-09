import { H2HPlayers } from "./H2HPlayers.model";

export class OverallSeasonStats {
    matchesCount: Array<number>;
    goalsCount: Array<number>; 
    h2hPlayers: Array<H2HPlayers>;
    yellowCardsCount: Array<number>; 
    redCardsCount: Array<number>;
    winnerTeam: string;
    winnerPlayer: string;
  }
  