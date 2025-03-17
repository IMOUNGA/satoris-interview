import {Component, input} from '@angular/core';
import {UserModel} from '../../../../entities/user.model';

@Component({
  selector: 'si-friends-modal',
  imports: [],
  templateUrl: './friends-modal.component.html',
  styleUrl: './friends-modal.component.scss'
})
export class FriendsModalComponent {
  friendsList = input<UserModel[]>();
}
