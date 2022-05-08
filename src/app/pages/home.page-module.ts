import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HomeComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/home.component-module';
import { ImageComponentModule } from '../../../projects/home/src/lib/adapters/primary/ui/image.component-module';
import { FirebaseImageServiceModule } from '../../../projects/home/src/lib/adapters/secondary/infrastructure/firebase-image.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  HomeComponentModule,
  ImageComponentModule,
  FirebaseImageServiceModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
