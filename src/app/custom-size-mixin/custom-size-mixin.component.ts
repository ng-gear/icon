import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-size-mixin',
  templateUrl: './custom-size-mixin.component.html',
  styleUrls: ['./custom-size-mixin.component.scss']
})
export class CustomSizeMixinComponent {
  @Input() iconName: string;
}
