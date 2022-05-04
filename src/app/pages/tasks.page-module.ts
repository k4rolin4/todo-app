import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksPage } from './tasks.page';
import { TaskFormComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/task-form.component-module';
import { TaskListComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/task-list.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TasksPage,
        }
      ]),
  TaskFormComponentModule,
  TaskListComponentModule,
],
  	declarations: [TasksPage],
  	providers: [],
  	exports: [] })
export class TasksPageModule {
}
