import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-individually-handled-custom-size',
  templateUrl: './individually-handled-custom-size.component.html',
  styleUrls: ['./individually-handled-custom-size.component.scss']
})
export class IndividuallyHandledCustomSizeComponent {
  @Input() iconName: string;
}
