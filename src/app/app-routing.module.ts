import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { TasksPageModule } from './pages/tasks.page-module';
import { TestPageModule } from './pages/test.page-module';

const routes: Routes = [{ 
        path: '', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'tasks', 
        loadChildren: () => TasksPageModule
      },
  { 
        path: 'test', 
        loadChildren: () => TestPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
