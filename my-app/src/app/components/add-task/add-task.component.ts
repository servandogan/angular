import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onSub: EventEmitter<Task> = new EventEmitter
  showAddTask!: boolean; 
  subscription!: Subscription;
  text: string = "";
  day: string = "";
  reminder: boolean = false

  constructor(private uiService: UiService){
    this.subscription = this.uiService
    .onToggle()
    .subscribe(value => this.showAddTask = value)
  }


  onSubmit(){
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onSub.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
