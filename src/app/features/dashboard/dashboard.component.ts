import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
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
    FriendsModalComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  /** This is a dashboard component. It's the big manager wich can create dashboard-items-* */

  /** 💡Evolution: This Dashboard Component could take a list of items and render them
   *     -> items: DashboardItem = [ {type: ItemType, text: string, description: string, picture: string, etc} ]
   *     This way, the dashboard component will be able to render any kind of item with no limitations
   * */

  userLoad: InputSignal<UserModel> = input.required<UserModel>();
  usersList: InputSignal<UserModel[]> = input.required<UserModel[]>();
  initialActiveForm: boolean = false;
  initialActiveFriendsList: boolean = false;

  onActiveFormUpdate(active: boolean): void {
    this.initialActiveForm = active;
  }

  onActiveFriendsListUpdate(active: boolean): void {
    this.initialActiveFriendsList = active;
  }

}
