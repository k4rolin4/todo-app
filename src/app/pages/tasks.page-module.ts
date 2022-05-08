import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksPage } from './tasks.page';
import { TaskListComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/task-list.component-module';
import { FirebaseTasksServiceModule } from '../../../projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-tasks.service-module';
import { AddTaskComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/add-task.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TasksPage,
        }
      ]),
  TaskListComponentModule,
  FirebaseTasksServiceModule,
  AddTaskComponentModule,
],
  	declarations: [TasksPage],
  	providers: [],
  	exports: [] })
export class TasksPageModule {
}
