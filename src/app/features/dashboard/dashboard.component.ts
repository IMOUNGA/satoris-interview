import { Component } from '@angular/core';
import {DashboardItemPictureComponent} from './components/dashboard-item-picture/dashboard-item-picture.component';
import {DashboardItemComponent} from './components/dashboard-item/dashboard-item.component';

@Component({
  selector: 'si-dashboard',
  imports: [
    DashboardItemPictureComponent,
    DashboardItemComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {

}
