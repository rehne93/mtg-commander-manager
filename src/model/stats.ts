import { Commander } from './commander';
export class Stats{

  // Der Commander, für den die Statistik gillt
  public commander: Commander;
  public won: boolean;
  public commanderPlayed: number;
  public points: number;

  constructor(commander: Commander, won: boolean){
    this.commander = commander;
    this.won = won;
    this.commanderPlayed = 0;
    this.points = 0;
  }

}
