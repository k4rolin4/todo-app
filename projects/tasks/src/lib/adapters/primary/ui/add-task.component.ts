import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';

@Component({ 
  selector: 'lib-add-task', 
  templateUrl: './add-task.component.html', 
  encapsulation: ViewEncapsulation.None, 
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AddTaskComponent {
  readonly addTask: FormGroup = new FormGroup({
    task: new FormControl()
  });

  constructor(
    @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort) {
  }

  onAddTaskSubmited(addTask: FormGroup): void {
    this._addsTaskDto.add({
      task: addTask.get('task')?.value
    });
    this.addTask.reset();
  }
  cancelAnimationFrame(): void{
    this.addTask.reset();
  }
}
