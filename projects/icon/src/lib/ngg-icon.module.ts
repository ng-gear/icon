import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { NggIconsConfig, NggIconRegistryService, NGG_ICONS_CONFIG } from './icon-registry.service';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [HttpClientModule],
  exports: [IconComponent]
})
export class NggIconModule {
  static forRoot(iconsConfig?: NggIconsConfig): ModuleWithProviders<NggIconModule> {
    const providers = iconsConfig ? [
      { provide: NGG_ICONS_CONFIG, useValue: iconsConfig },
      NggIconRegistryService
    ] : [
      NggIconRegistryService
    ];

    return {
      ngModule: NggIconModule,
      providers
    };
  }

  static forChild(): ModuleWithProviders<NggIconModule> {
    return {
      ngModule: NggIconModule
    };
  }
}
