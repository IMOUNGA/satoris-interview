import {Component, input} from '@angular/core';
import {CustomSvgIconComponent} from '../../../../components/custom-svg-icon/custom-svg-icon.component';
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
}
