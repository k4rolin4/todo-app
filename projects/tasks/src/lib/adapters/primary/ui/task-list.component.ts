import { map, Observable, of, tap } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, TemplateRef } from '@angular/core';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { SETS_TASK_DTO, SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';

@Component({ 
    selector: 'lib-task-list', 
    templateUrl: './task-list.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class TaskListComponent {
  tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll()
    .pipe(map((task: TaskDTO[]) =>
    task.sort((a, b) => a.created - b.created))
  );

  deleteTaskAlert = false;

  constructor(
      @Inject(GETS_ALL_TASK_DTO) 
      private _getsAllTaskDto: GetsAllTaskDtoPort, 
      @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort, 
      @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort
    ) {}

  onItemClicked(task: TaskDTO): void {
    if (task.done === false) {
      this._setsTaskDto.set({
        id: task.id,
        done: true,
      });
    } else {
      this._setsTaskDto.set({
        id: task.id,
        done: false,
      })
    }
  }

  removeTask(taskId: string): void {
    this._removesTaskDto.remove(taskId);

  }

  clickConfirm(taskId: string) {
    if(confirm("Are you sure to delete this task?")) {
      this._removesTaskDto.remove(taskId);
    } 
  }
  showDeleteTask() {
    this.deleteTaskAlert = true;
  }
}
