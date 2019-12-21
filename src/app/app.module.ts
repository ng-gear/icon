import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NGG_ICONS_CONFIG } from '../../projects/icon/src/lib/icon-registry.service';
import { NggIconModule } from '../../projects/icon/src/lib/ngg-icon.module';
import { AppComponent } from './app.component';
import { CustomSizeComponent } from './custom-size/custom-size.component';
import { iconsConfig } from './icons-config';

@NgModule({
  declarations: [
    AppComponent,
    CustomSizeComponent
  ],
  imports: [
    BrowserModule,
    NggIconModule.forRoot()
  ],
  providers: [
    { provide: NGG_ICONS_CONFIG, useValue: iconsConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
