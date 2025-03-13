import {Component, inject} from '@angular/core';
import {UserService} from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private userService = inject(UserService);

  protected user = this.userService.getSingleUser();
  protected usersList = this.userService.getSeveralUsers(2);
}
