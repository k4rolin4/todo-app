import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-task-form', templateUrl: './task-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TaskFormComponent {
  readonly task: FormGroup = new FormGroup({task: new FormControl()});
}
