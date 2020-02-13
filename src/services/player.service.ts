import { Injectable } from '@angular/core';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  private currentPlayer: Player;

  constructor() { }


  public fetchCurrentPlayer(id: number){
    if (!this.currentPlayer) {
        this.currentPlayer = new Player('Bla Bla ' + id);
    }
  }

  public getCurrentPlayer(): Player {
    if (!this.currentPlayer) {
      this.currentPlayer = new Player('Unbekannt');
    }
    return this.currentPlayer;
  }
}
