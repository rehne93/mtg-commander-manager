import { Component, OnInit, Input } from '@angular/core';
import { Commander } from '../../../../model/commander';

@Component({
  selector: 'app-commander-overview',
  templateUrl: './commander-overview.component.html',
  styleUrls: ['./commander-overview.component.css']
})
export class CommanderOverviewComponent implements OnInit {

  @Input() commanders: Commander[] = [];
  @Input() showImages: boolean = false;
  @Input() width: number = 189;
  @Input() height: number = 264;


  constructor() { }

  ngOnInit() {
  }

}
