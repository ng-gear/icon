import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { NggIconRegistryService } from './icon-registry.service';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [HttpClientModule],
  exports: [IconComponent]
})
export class NggIconModule {
  static forRoot(): ModuleWithProviders<NggIconModule> {
    return {
      ngModule: NggIconModule,
      providers: [
        NggIconRegistryService
      ]
    };
  }

  static forChild(): ModuleWithProviders<NggIconModule> {
    return {
      ngModule: NggIconModule
    };
  }
}
