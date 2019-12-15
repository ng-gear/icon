import { Component, Input, OnChanges } from '@angular/core';

import { NggIconRegistryService } from './icon-registry.service';

@Component({
  selector: 'ngg-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnChanges {
  private readonly iconRegistry: NggIconRegistryService;

  @Input() iconName: string;
  iconSvg: string | null = null;

  constructor(iconRegistry: NggIconRegistryService) {
    this.iconRegistry = iconRegistry;
  }

  ngOnChanges(changes): void {
    if (changes.iconName && this.iconName) {
      this.iconRegistry;
    }
    // this.iconRegistry;
  }
}
