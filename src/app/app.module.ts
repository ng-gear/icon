import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NggIconModule } from '../../projects/icon/src/lib/ngg-icon.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NggIconModule.forRoot({
      iconsBase: '/assets/icons',
      icons: {
        'add-more': 'add-more.svg',
        add: 'add.svg',
        apps: 'apps.svg',
        'arca-filled': 'arca-filled.svg',
        arca: 'arca.svg',
        'bell-filled': 'bell-filled.svg',
        bell: 'bell.svg',
        'card-green': 'card-green.svg',
        card: 'card.svg',
        'check-circle-blue': 'check-circle-blue.svg',
        'check-circle-yellow': 'check-circle-yellow.svg',
        'check-circle': 'check-circle.svg',
        check: 'check.svg',
        'claer-filter': 'claer-filter.svg',
        close: 'close.svg',
        'curency-exchange': 'curency-exchange.svg',
        'double-arrow-left': 'double-arrow-left.svg',
        'double-arrow-right': 'double-arrow-right.svg',
        'down-arrow-filled': 'down-arrow-filled.svg',
        'down-arrow': 'down-arrow.svg',
        'edit-gray': 'edit-gray.svg',
        enter: 'enter.svg',
        'envelope-filled': 'envelope-filled.svg',
        'envelope-gray': 'envelope-gray.svg',
        envelope: 'envelope.svg',
        error: 'error.svg',
        excell: 'excell.svg',
        eye: 'eye.svg',
        'filter-2': 'filter-2.svg',
        'filter-gray': 'filter-gray.svg',
        'info-filled': 'info-filled.svg',
        'info-gray': 'info-gray.svg',
        info: 'info.svg',
        'left-arrow-filled': 'left-arrow-filled.svg',
        'left-arrow-gray': 'left-arrow-gray.svg',
        'left-arrow': 'left-arrow.svg',
        'master-card-filled': 'master-card-filled.svg',
        'master-card': 'master-card.svg',
        money: 'money.svg',
        'pause-red': 'pause-red.svg',
        'pause-yellow': 'pause-yellow.svg',
        pause: 'pause.svg',
        people: 'people.svg',
        'right-arrow-filled': 'right-arrow-filled.svg',
        'right-arrow-gray': 'right-arrow-gray.svg',
        'right-arrow': 'right-arrow.svg',
        search: 'search.svg',
        'settings-filled': 'settings-filled.svg',
        'star-filled': 'star-filled.svg',
        star: 'star.svg',
        'stop-sign': 'stop-sign.svg',
        'up-arrow': 'up-arrow.svg',
        'visa-filled': 'visa-filled.svg',
        visa: 'visa.svg',
        warning: 'warning.svg'
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
