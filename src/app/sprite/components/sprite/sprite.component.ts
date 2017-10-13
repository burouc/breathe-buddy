import { Component, OnInit } from '@angular/core';
import { SvgNodes } from '../../../svg/components/svg/svg-nodes.model';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html'
})
export class SpriteComponent implements OnInit {
  public svgNodes: SvgNodes = {
    circles: [
      {
        r: 50,
        cy: 70,
        cx: 70
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {

  }
}
