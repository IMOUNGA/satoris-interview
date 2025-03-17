import {Component, input, model} from '@angular/core';
import {UserModel} from '../../../../entities/user.model';
import {NgIf} from '@angular/common';

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
}
