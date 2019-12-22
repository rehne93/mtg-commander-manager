import { Component, OnInit, Input } from '@angular/core';
import { DeckstatsApiService } from '../../../services/deckstats-api/deckstats-api.service';

@Component({
  selector: 'app-commanders',
  templateUrl: './commanders.component.html',
  styleUrls: ['./commanders.component.css']
})
export class CommandersComponent implements OnInit {

  readonly SUCCESS_FLAG = 'success';
  readonly LIST_FLAG = 'list';

  private deckstatsUrl: string;
  commanders: string[] = [];


  constructor(private deckstatsService: DeckstatsApiService) { }

  ngOnInit() {
  }

  fetch() {
      this.deckstatsService.getDeck(this.deckstatsUrl).subscribe((result: string)=>{
        if (result[this.SUCCESS_FLAG] !== true) {
          alert('Fehler beim Request');
          return;
        }
        const resultList = result[this.LIST_FLAG];
        const commander = this.deckstatsService.parseCommander(resultList);
        if (commander !== ''){
          this.commanders.push(commander);
        }
      });
  }

}
