import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService){  //ruft instant die funktion auf mit den jeweiligen parametern
    
  }

  ngOnInit(): void{
    this.taskService.getTask().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(
      () => this.tasks = this.tasks.filter(
        t=> t.id !== task.id));
  }

  setReminder(task: Task){
    task.reminder = !task.reminder
    this.taskService.setReminder1(task).subscribe()
  }

  addnewTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
  }

  onTaskClicker(tasks: Task[]){
    this.tasks = tasks;
  }
}