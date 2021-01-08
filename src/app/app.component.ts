import { Component, Inject } from '@angular/core';

import { NggIconsConfig, NGG_ICONS_CONFIG } from '../../projects/icon/src/lib/icon-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly icons: string[];
  selectedIcon = 'check';

  constructor(@Inject(NGG_ICONS_CONFIG) iconsConfig: NggIconsConfig) {
    this.icons = Object.keys(iconsConfig.icons);
  }
}
