import { Component, Directive, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-filtertasks',
  templateUrl: './filtertasks.component.html',
  styleUrls: ['./filtertasks.component.css']
})
export class FiltertasksComponent {
  @Output() onTaskClick = new EventEmitter;
  tasks: Task[] = [];


  constructor(private taskService: TaskService){

  }
  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => this.tasks = tasks);
  }

  taskClick(tasks: Task[]){
    var sortedTask = tasks

    sortedTask = sortedTask.sort((a, b) => (a.text < b.text ? -1 : 1))
    console.log(sortedTask)
    for(let i = 0; i < sortedTask.length; i++){
      sortedTask[i].id = i+1;
      this.taskService.sortafterTask(sortedTask[i]).subscribe((tasks2) => this.tasks = tasks2)
      this.onTaskClick.emit(this.tasks)
    }
  }
  dateClick(tasks: Task[]){
    var sortedTask = tasks

    sortedTask = sortedTask.sort((a, b) => (a.day < b.day ? -1 : 1))
    console.log(sortedTask)
    for(let i = 0; i < sortedTask.length; i++){
      sortedTask[i].id = i+1;
      this.taskService.sortafterTask(sortedTask[i]).subscribe((tasks2) => this.tasks = tasks2)
      this.onTaskClick.emit(this.tasks)
    }
  }
  reminderClick(tasks: Task[]){
    
  }
}
