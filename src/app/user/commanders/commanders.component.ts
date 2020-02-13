import { Component, OnInit, Input } from '@angular/core';
import { DeckstatsApiService } from '../../../services/deckstats-api/deckstats-api.service';
import { Commander } from '../../../model/commander';
import { ScryfallApiService } from '../../../services/scryfall-api/scryfall-api.service';
import { PlayerService } from '../../../services/player.service';

@Component({
  selector: 'app-commanders',
  templateUrl: './commanders.component.html',
  styleUrls: ['./commanders.component.css']
})
export class CommandersComponent implements OnInit {

  readonly SUCCESS_FLAG = 'success';
  readonly LIST_FLAG = 'list';

  private deckstatsUrl: string;


  constructor(private deckstatsService: DeckstatsApiService, private scryFallService: ScryfallApiService,
              private playerService: PlayerService) { }

  ngOnInit() {
  }

  fetch() {
      this.deckstatsService.getDeck(this.deckstatsUrl).subscribe((result) => {
        if (result[this.SUCCESS_FLAG] !== true) {
          alert('Fehler beim Request');
          return;
        }
        const resultList = result[this.LIST_FLAG];
        const commanderName = this.deckstatsService.parseCommander(resultList);
        if (commanderName !== '') {
          const commander = new Commander();
          commander.name = commanderName;
          this.scryFallService.getImageUrl(commander.name).then((res: string) => {
            console.log(res);
            commander.imageUri = res; });
          this.deckstatsUrl = '';
          this.playerService.getCurrentPlayer().commanders.push(commander);
        }
      });
  }

}
