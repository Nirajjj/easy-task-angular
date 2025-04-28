import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  getImage = computed(() => 'assets/users/' + this.avatar());

  get getImage() {
    return 'assets/users/' + this.user.avatar;
  }

  onUserButtonClick() {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
