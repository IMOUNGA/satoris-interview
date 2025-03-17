import {Component, inject, OnInit} from '@angular/core';
import {UserService} from './core/services/user/user.service';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {IntroductionComponent} from './features/introduction/introduction.component';

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
  private userService = inject(UserService);
  protected user = this.userService.getSingleUser();
  protected usersList = this.userService.getSeveralUsers(4);
  showDashboard = false;

  ngOnInit() {
    setTimeout(() => {
      this.showDashboard = true;
    }, 5000);
  }
}
