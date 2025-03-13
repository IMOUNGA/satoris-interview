import {Component, inject} from '@angular/core';
import {UserService} from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected user = inject(UserService).getSingleUser();
}
