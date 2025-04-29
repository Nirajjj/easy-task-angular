import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-new',
  standalone: true,
  imports: [],
  templateUrl: './task-new.component.html',
  styleUrl: './task-new.component.css'
})
export class TaskNewComponent {
 @Output() isModalClose = new EventEmitter
title = "";
summery = "";
dueDate = "";
onCancelClick() {
  this.isModalClose.emit(false)
}
onSubmit(){

}
}
