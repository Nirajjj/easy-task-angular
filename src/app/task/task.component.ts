import { Component, Input } from '@angular/core';
import { IndividualTaskComponent } from './individual-task/individual-task.component';
import { TaskNewComponent } from './task-new/task-new.component';
interface User {
  id: string;
  name: string;
  avatar: string;
}
interface Task {
  id: string,
  userId: string,
  title: string,
  summery: string,
  dueDate: string
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [IndividualTaskComponent, TaskNewComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})

export class TaskComponent {
  @Input() selectedUser: User | undefined;
  currentUserTask: Task[] | undefined
  isAddTask = false
  tasks = [

    {
      id: "t1",
      userId: "u1",
      title: "master angular",
      summery: "Learn all the basic and advanced features of angular and how to apply them.",
      dueDate: "2025-12-31"
    },
    {
      id: "t2",
      userId: "u2",
      title: "master react",
      summery: "Learn all the basic and advanced features of React and how to apply them.",
      dueDate: "2025-11-30"
    },
    {
      id: "t3",
      userId: "u1",
      title: "master next.js",
      summery: "Learn all the basic and advanced features of nextjs and how to apply them.",
      dueDate: "2026-01-15"
    }
    
  ]
  get currentUserTasks() {
    return this.tasks.filter((task)=> this.selectedUser?.id === task.userId)
    
  }
  onClickComplete(taskId: string) {
    this.tasks = this.tasks.filter(task=> task.id !== taskId)
  }

  onTaskAddClick() {
    this.isAddTask = true
  }

  onCloseModal(isModalClose: boolean) {
    this.isAddTask = isModalClose
    
  }
}
