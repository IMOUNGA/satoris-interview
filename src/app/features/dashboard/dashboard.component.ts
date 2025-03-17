import {Component, input} from '@angular/core';
import {DashboardItemPictureComponent} from './components/dashboard-item-picture/dashboard-item-picture.component';
import {DashboardItemComponent} from './components/dashboard-item/dashboard-item.component';
import {EmbedGoogleMapsComponent} from '../../shared/components/embed-google-maps/embed-google-maps.component';
import {FormContactComponent} from '../../shared/components/forms/form-contact/form-contact.component';
import {NgIf} from '@angular/common';
import {FriendsModalComponent} from '../../shared/components/modals/friends-modal/friends-modal.component';
import {UserModel} from '../../entities/user.model';

@Component({
  selector: 'si-dashboard',
  imports: [
    DashboardItemPictureComponent,
    DashboardItemComponent,
    EmbedGoogleMapsComponent,
    FormContactComponent,
    NgIf,
    FriendsModalComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  userLoad = input.required<UserModel>();
  usersList = input.required<UserModel[]>();
  initialActiveForm = false;
  initialActiveFriendsList = false;

  onActiveFormUpdate(active: boolean): void {
    this.initialActiveForm = active;
  }

  onActiveFriendsListUpdate(active: boolean): void {
    this.initialActiveFriendsList = active;
  }

}
