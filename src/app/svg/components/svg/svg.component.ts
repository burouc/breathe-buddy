import {
  Component, Input, OnInit
} from '@angular/core';
import { CircleProperties } from '../svg-circle/circle-properties.model';
import { SvgNodes } from './svg-nodes.model';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html'
})
export class SvgComponent implements OnInit {
  @Input('nodes')
  set nodesValue(nodes: SvgNodes) {
    this.circles = nodes.circles;
  }

  public circles: Array<CircleProperties> = [];

  constructor() {
  }

  ngOnInit() {
  }
}
