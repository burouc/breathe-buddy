import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SpriteModule } from './sprite/sprite.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SpriteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
