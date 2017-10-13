import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpriteComponent } from './components/sprite/sprite.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  imports: [
    CommonModule,
    SvgModule
  ],
  declarations: [SpriteComponent],
  exports: [SpriteComponent]
})
export class SpriteModule {
}
