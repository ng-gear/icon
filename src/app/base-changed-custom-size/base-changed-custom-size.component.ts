import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-changed-custom-size',
  templateUrl: './base-changed-custom-size.component.html',
  styleUrls: ['./base-changed-custom-size.component.scss']
})
export class BaseChangedCustomSizeComponent {
  @Input() iconName: string;
}
