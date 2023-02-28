import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes
  tasks: Task[] = [];
  
  constructor(){

  }
  ngOnInit(): void{
  }

  deleteElem(task: any){
    this.onDeleteTask.emit(task)
  }

  setReminder(task: any){
    this.onReminder.emit(task)
  }
  

}
