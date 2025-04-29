import { Component } from '@angular/core';
import { headerComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userData = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.userData.find((user) => user.id === this.selectedUserId);
  }

  onUserButtonClick(id: string) {
    console.log(` this id is click: ${id}`);
    this.selectedUserId = id;
  }
}
