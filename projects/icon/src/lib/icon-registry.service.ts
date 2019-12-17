import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { clearUrlSlashes } from '../helpers';

export interface NggIconsConfig {
  iconsBase: string;
  icons: {
    [iconName: string]: string;
  };
}

export const NGG_ICONS_CONFIG = new InjectionToken('ngg-icons-config');

@Injectable()
export class NggIconRegistryService {
  private readonly httpClient: HttpClient;
  private readonly domSanitizer: DomSanitizer;
  private readonly iconUrlsMap = new Map<string, string>();
  private readonly iconRequests = new Map<string, Observable<SafeHtml>>();

  constructor(httpClient: HttpClient, domSanitizer: DomSanitizer, @Inject(NGG_ICONS_CONFIG) iconsConfig: NggIconsConfig) {
    this.httpClient = httpClient;
    this.domSanitizer = domSanitizer;

    this.registerIcons(iconsConfig);
  }

  getIcon(iconName: string): Observable<SafeHtml> {
    if (this.iconRequests.has(iconName)) {
      return this.iconRequests.get(iconName)!;
    }

    if (!this.iconUrlsMap.has(iconName)) {
      throw new Error(`ngg-icon with "${iconName}" name has not been registered. please, register it before using`);
    }

    const request = this.httpClient.get(this.iconUrlsMap.get(iconName)!, { responseType: 'text' }).pipe(
      shareReplay(1),
      map((svgCode) => svgCode.replace(/^[\s\S]*(?=<svg)/g, '')),
      map((svg) => this.domSanitizer.bypassSecurityTrustHtml(svg))
    );

    this.iconRequests.set(iconName, request);

    return request;
  }

  registerIcons(iconsConfig: NggIconsConfig) {
    const { icons, iconsBase } = iconsConfig;
    Object.keys(icons).forEach((icon) => {
      const iconPath = icons[icon];
      this.registerIcon(icon, `${clearUrlSlashes(iconsBase)}/${clearUrlSlashes(iconPath)}`);
    });
  }

  registerIcon(iconName, iconUrl) {
    this.iconUrlsMap.set(iconName, iconUrl);
  }
}
