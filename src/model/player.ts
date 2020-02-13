import { Commander } from './commander';
export class Player {

  public name: string;
  public commanders: Commander[];


  constructor(name: string){
    this.name = name;
    this.commanders = [];
  }

}
