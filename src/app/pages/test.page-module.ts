import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestPage } from './test.page';
import { TaskListComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/task-list.component-module';
import { FirebaseTasksServiceModule } from '../../../projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-tasks.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TestPage,
        }
      ]),
  TaskListComponentModule,
  FirebaseTasksServiceModule,
],
  	declarations: [TestPage],
  	providers: [],
  	exports: [] })
export class TestPageModule {
}
