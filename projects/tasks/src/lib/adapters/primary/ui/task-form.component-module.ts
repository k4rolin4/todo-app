import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [TaskFormComponent],
  	providers: [],
  	exports: [TaskFormComponent] })
export class TaskFormComponentModule {
}
