import { EventsInMatchModel } from "./events-in-match.model";

export class MatchDetailModel {
    matchId: number;
    typeOfFormat: string;
    eventsFirstHalf: Array<EventsInMatchModel>;
    eventsSecondHalf: Array<EventsInMatchModel>;
    eventsOverTime: Array<EventsInMatchModel>;
    eventsWithoutTime: Array<EventsInMatchModel>;
}