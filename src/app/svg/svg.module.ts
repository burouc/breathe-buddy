import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './components/svg/svg.component';
import { SvgCircleComponent } from './components/svg-circle/svg-circle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SvgComponent, SvgCircleComponent],
  exports: [SvgComponent],
  entryComponents: [SvgCircleComponent]
})
export class SvgModule {
}
