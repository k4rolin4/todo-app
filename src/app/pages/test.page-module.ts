import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestPage } from './test.page';
import { TaskListComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/task-list.component-module';
import { FirebaseTasksServiceModule } from '../../../projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-tasks.service-module';
import { AddTaskComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/add-task.component-module';
import { DateComponentModule } from '../../../projects/date/src/lib/adapters/primary/ui/date.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TestPage,
        }
      ]),
  TaskListComponentModule,
  FirebaseTasksServiceModule,
  AddTaskComponentModule,
  DateComponentModule
],
  	declarations: [TestPage],
  	providers: [],
  	exports: [] })
export class TestPageModule {
}
