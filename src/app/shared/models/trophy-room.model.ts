export class TrophyRoomModel {
    titlesCountEL: number;
    titlesCountCL: number;
    playerName: string;
    hasAnyTrophy: boolean;

    constructor(titlesCountCL: number, titlesCountEL: number){
        this.titlesCountCL = titlesCountCL;
        this.titlesCountEL = titlesCountEL;
        this.hasAnyTrophy = this.setHasAnyTrophy()
    }

    private setHasAnyTrophy(): boolean{
        return (this.titlesCountCL + this.titlesCountEL) > 0 ? true : false;
    }
}