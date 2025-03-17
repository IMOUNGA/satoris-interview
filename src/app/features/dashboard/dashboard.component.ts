import { Component } from '@angular/core';
import {DashboardItemPictureComponent} from './components/dashboard-item-picture/dashboard-item-picture.component';
import {DashboardItemComponent} from './components/dashboard-item/dashboard-item.component';
import {EmbedGoogleMapsComponent} from '../../shared/components/embed-google-maps/embed-google-maps.component';
import {FormContactComponent} from '../../shared/components/forms/form-contact/form-contact.component';

@Component({
  selector: 'si-dashboard',
  imports: [
    DashboardItemPictureComponent,
    DashboardItemComponent,
    EmbedGoogleMapsComponent,
    FormContactComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  activeForm = false;

  onActiveFormUpdate(active: boolean): void {
    this.activeForm = active;
  }

}
