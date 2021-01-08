import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NGG_ICONS_CONFIG } from '../../projects/icon/src/lib/icon-registry.service';
import { NggIconModule } from '../../projects/icon/src/lib/ngg-icon.module';
import { AppComponent } from './app.component';
import { BaseChangedCustomSizeComponent } from './base-changed-custom-size/base-changed-custom-size.component';
import { CustomSizeMixinComponent } from './custom-size-mixin/custom-size-mixin.component';
import { iconsConfig } from './icons-config';
import { IndividuallyHandledCustomSizeComponent } from './individually-handled-custom-size/individually-handled-custom-size.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSizeMixinComponent,
    BaseChangedCustomSizeComponent,
    IndividuallyHandledCustomSizeComponent
  ],
  imports: [
    BrowserModule,
    NggIconModule.forRoot(),
    FormsModule
  ],
  providers: [
    { provide: NGG_ICONS_CONFIG, useValue: iconsConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
