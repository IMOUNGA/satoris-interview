import {Component, input, output} from '@angular/core';
import {CustomSvgIconComponent} from '../../../../shared/components/custom-svg-icon/custom-svg-icon.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'si-dashboard-item-picture',
  imports: [
    CustomSvgIconComponent,
    NgIf
  ],
  templateUrl: './dashboard-item-picture.component.html',
  styleUrl: './dashboard-item-picture.component.scss',
  standalone: true,
})
export class DashboardItemPictureComponent {
  title = input<string>();
  picture = input.required<string>();
  description = input<string>('Découvrez moi');
  onClick = output<boolean>()

  handleClick() {
    this.onClick.emit(true);
  }
}
