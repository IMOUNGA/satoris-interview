import {Component, input} from '@angular/core';

@Component({
  selector: 'si-dashboard-item-picture',
  imports: [],
  templateUrl: './dashboard-item-picture.component.html',
  styleUrl: './dashboard-item-picture.component.scss',
  standalone: true,
})
export class DashboardItemPictureComponent {
  title = input.required<string>();
  aboveLine = input<boolean>(true);
}
