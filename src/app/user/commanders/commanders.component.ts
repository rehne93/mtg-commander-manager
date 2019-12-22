import { Component, OnInit, Input } from '@angular/core';
import { DeckstatsApiService } from '../../../services/deckstats-api/deckstats-api.service';
import { Commander } from '../../../model/commander';
import { ScryfallApiService } from '../../../services/scryfall-api/scryfall-api.service';

@Component({
  selector: 'app-commanders',
  templateUrl: './commanders.component.html',
  styleUrls: ['./commanders.component.css']
})
export class CommandersComponent implements OnInit {

  readonly SUCCESS_FLAG = 'success';
  readonly LIST_FLAG = 'list';

  private deckstatsUrl: string;
  commanders: Commander[] = [];


  constructor(private deckstatsService: DeckstatsApiService, private scryFallService: ScryfallApiService) { }

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
          this.scryFallService.getImageUrl(commander.name).then((res: string) =>{ commander.imageUri = res; });
          this.commanders.push(commander);
          this.deckstatsUrl = '';
        }
      });
  }

}
