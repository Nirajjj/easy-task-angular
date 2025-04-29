import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Task {
  id: string,
  userId: string,
  title: string,
  summery: string,
  dueDate: string
}
interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-individual-task',
  standalone: true,
  imports: [NgIf],
  templateUrl: './individual-task.component.html',
  styleUrl: './individual-task.component.css'
})
export class IndividualTaskComponent {
@Input({required: true}) userTask!: Task
@Output() complete = new EventEmitter()

onClickComplete(id: string) {
  this.complete.emit(id)
}

}
