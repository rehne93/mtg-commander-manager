import { Component, OnInit, Input } from '@angular/core';
import { Commander } from '../../../../model/commander';

@Component({
  selector: 'app-single-commander-view',
  templateUrl: './single-commander-view.component.html',
  styleUrls: ['./single-commander-view.component.css']
})
export class SingleCommanderViewComponent implements OnInit {


  @Input() commander: Commander;
  @Input() showImages: boolean = false;

  @Input() width: number = 189;
  @Input() height: number = 264;

  constructor() { }

  ngOnInit() {
  }

  getImageSizes(){
    return { width: this.width + 'px',
            height: this.height + 'px'};
  }

}
