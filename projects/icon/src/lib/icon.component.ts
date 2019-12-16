import { Component, HostBinding, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { NggIconRegistryService } from './icon-registry.service';

@Component({
  selector: 'ngg-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnChanges {
  private readonly iconRegistry: NggIconRegistryService;

  @Input() iconName: string;
  @HostBinding('innerHTML') iconSvg: SafeHtml | null = null;

  constructor(iconRegistry: NggIconRegistryService) {
    this.iconRegistry = iconRegistry;
  }

  ngOnChanges(changes): void {
    if (changes.iconName && this.iconName) {
      this.iconRegistry.getIcon(this.iconName).subscribe((svg) => this.iconSvg = svg);
    }
  }
}
