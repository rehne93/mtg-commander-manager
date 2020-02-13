import { Component, OnInit } from '@angular/core';
import { Player } from '../../../model/player';
import { PlayerService } from '../../../services/player.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  player: Player;
  constructor(public playerService: PlayerService) { }

  ngOnInit() {
    this.fetchProfile();
  }


  public fetchProfile() {
    this.playerService.fetchCurrentPlayer(1);
  }


}
