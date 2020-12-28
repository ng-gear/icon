# @ng-gear/icon

@ng-gear/icon library provides the `ngg-icon` component which will make the usage of icons neat and easy in any angular 9.1 project. 

## Installation

```bash
npm install --save @ng-gear/icon
``` 
or 
```bash
yarn add @ng-gear/icon
```

## Usage

It is needed to have `icons-config.ts` which should include object with `NggIconsConfig` type to register the icons.
Take a look at an example of a file bellow.

```ts
import { NggIconsConfig } from "@ng-gear/icon";

export const iconsConfig: NggIconsConfig = {
  iconsBase: "/assets/icons",
  icons: {
    icon1: "your-icon.svg",
    icon2: "your-icon.svg",
    icon3: "your-icon.svg",
    icon4: "data:meta-type;base64,your-icon-data",
    icon5: "https://your-icon-url"
  }
};
```

Provide `iconsConfig` as `NGG_ICONS_CONFIG` and import `NggIconModule.forRoot()` in the root module and use it in your html template.
For child modules you can either import `NggIconModule.forChild()` or just `NggIconModule`.

```ts
...
import { NGG_ICONS_CONFIG, NggIconModule } from "@ng-gear/icon";

...
import { iconsConfig } from "./icons-config";

@NgModule({
  ...,
  imports: [
    ...
    NggIconModule.forRoot()
  ],
  providers: [
    { provide: NGG_ICONS_CONFIG, useValue: iconsConfig }
  ]
})
export class RootModule { }
```

For the `html` you should use `<ngg-icon>` by providing `iconName` and `iconSize` like in the example bellow.

```html
<ngg-icon iconName="icon1" iconSize="tiny"></ngg-icon>
<ngg-icon iconName="icon2" iconSize="small"></ngg-icon>
<ngg-icon iconName="icon3" iconSize="normal"></ngg-icon>
<ngg-icon iconName="icon4" iconSize="large"></ngg-icon>
<ngg-icon iconName="icon5" iconSize="extra-large"></ngg-icon>
Custom size 
<div [ngStyle]="{fontSize: 60px}">
    <ngg-icon iconName="icon1" iconSize="tiny"></ngg-icon>
    <ngg-icon iconName="icon2" iconSize="small"></ngg-icon>
    <ngg-icon iconName="icon3" iconSize="normal"></ngg-icon>
    <ngg-icon iconName="icon4" iconSize="large"></ngg-icon>
    <ngg-icon iconName="icon5" iconSize="extra-large"></ngg-icon>
</div>
```

## Components
###**`<ngg-icon></ngg-icon>`**
### Attributes
####**`iconName: string`** 
####**`iconSize: tiny | small | normal | large | extra-large`**

