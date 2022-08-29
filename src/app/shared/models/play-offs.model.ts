import { PlayOffsMatchModel } from "./play-offs-match.model";

export class PlayOffsModel {
    Quarterfinals: Array<PlayOffsMatchModel>;
    'Round of 16': Array<PlayOffsMatchModel>;
    Semifinals: Array<PlayOffsMatchModel>;
}