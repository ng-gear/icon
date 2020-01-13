import { Component, HostBinding, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { NggIconRegistryService } from './icon-registry.service';

export type SizeName = 'tiny' | 'small' | 'normal' | 'large' | 'extra-large';

@Component({
  selector: 'ngg-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class IconComponent implements OnChanges {
  private readonly iconRegistry: NggIconRegistryService;

  @Input() iconName: string;
  @Input() @HostBinding('attr.ngg-icon-size') iconSize: SizeName | null = null;
  @Input() @HostBinding('attr.ngg-is-flat-icon') isFlat = true;

  iconSvg: SafeHtml | null = null;

  constructor(iconRegistry: NggIconRegistryService) {
    this.iconRegistry = iconRegistry;
  }

  ngOnChanges(changes): void {
    if (changes.iconName && this.iconName) {
      this.iconRegistry.getIcon(this.iconName).subscribe((svg) => this.iconSvg = svg);
    }
  }
}
