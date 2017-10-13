import { Component, Input, OnInit } from '@angular/core';
import { CircleProperties } from './circle-properties.model';

@Component({
  selector: '[appSvgCircle]',
  templateUrl: './svg-circle.component.html'
})
export class SvgCircleComponent implements OnInit {
  @Input('circleProperties')
  set circlePropertiesValue(circleProperties: CircleProperties) {
    this.r = circleProperties.r;
    this.cx = circleProperties.cx;
    this.cy = circleProperties.cy;
  }

  public r = 20;
  public cx = 30;
  public cy = 30;

  constructor() {
  }

  ngOnInit() {
  }
}
