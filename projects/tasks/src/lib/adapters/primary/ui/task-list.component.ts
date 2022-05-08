import { Observable, of, tap } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, TemplateRef } from '@angular/core';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { SETS_TASK_DTO, SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';

@Component({ 
    selector: 'lib-task-list', 
    templateUrl: './task-list.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class TaskListComponent {
  tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll().pipe(tap(console.log));

  constructor(
      @Inject(GETS_ALL_TASK_DTO) 
      private _getsAllTaskDto: GetsAllTaskDtoPort, 
      @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort
    ) {}

  onItemClicked(setTask: any): void {
    if (setTask.done === false) {
      this._setsTaskDto.set({
        id: setTask.id,
        done: true,
      });
    } else {
      this._setsTaskDto.set({
        id: setTask.id,
        done: false,
      })
    }
  }

}
