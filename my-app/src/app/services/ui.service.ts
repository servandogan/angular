import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask2(showAddTask: boolean): void {
    showAddTask = !showAddTask;
    this.subject.next(showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
