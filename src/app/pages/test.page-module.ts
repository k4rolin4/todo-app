import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestPage } from './test.page';
import { TaskListComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/task-list.component-module';
import { FirebaseTasksServiceModule } from '../../../projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-tasks.service-module';
import { AddTaskComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/add-task.component-module';
import { DateComponentModule } from '../../../projects/date/src/lib/adapters/primary/ui/date.component-module';
import { ImageComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/image.component-module';
import { FirebaseImageServiceModule } from '../../../projects/home/src/lib/adapters/secondary/infrastructure/firebase-image.service-module';

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
  DateComponentModule,
  ImageComponentModule,
  FirebaseImageServiceModule
],
  	declarations: [TestPage],
  	providers: [],
  	exports: [] })
export class TestPageModule {
}
