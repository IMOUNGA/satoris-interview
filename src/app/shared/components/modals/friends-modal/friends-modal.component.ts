import {Component, input, model} from '@angular/core';
import {UserModel} from '../../../../entities/user.model';
import {NgIf} from '@angular/common';
import {first} from 'rxjs';

@Component({
  selector: 'si-friends-modal',
  imports: [
    NgIf
  ],
  templateUrl: './friends-modal.component.html',
  styleUrl: './friends-modal.component.scss'
})
export class FriendsModalComponent {
  friendsList = input<UserModel[]>();
  activeModal = model<boolean>(false);

  updateActiveModal(): void {
    this.activeModal.update(() => !this.activeModal());
  }

  getFriendsNumberLabel() {
    const friendsCount = this.friendsList()?.length || 0;
    return friendsCount > 1 ?
      `${friendsCount} amis` : `${friendsCount} ami`;
  }

}
