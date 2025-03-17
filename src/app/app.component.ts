import {Component, inject, OnInit, Signal} from '@angular/core';
import {UserService} from './core/services/user/user.service';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {IntroductionComponent} from './features/introduction/introduction.component';
import {UserModel} from './entities/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    DashboardComponent,
    IntroductionComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private userService: UserService = inject(UserService);
  protected user: Signal<UserModel | null> = this.userService.getSingleUser();
  protected usersList: Signal<UserModel[] | null> = this.userService.getSeveralUsers(4);
  showDashboard = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showDashboard = true;
    }, 5000);
  }
}
