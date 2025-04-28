import { Component, computed, Input, signal, input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  name = input.required<string>()
  avatar = input.required<string>()
  id = input.required<string>()
  // @Output getData = 
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  getImage = computed(() => 'assets/users/' + this.avatar());

  // get getImage() {
  //   return 'assets/users/' + this.avatar();
  // }

  onUserButtonClick() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
