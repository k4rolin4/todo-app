import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';

@NgModule({ imports: [CommonModule],
  	declarations: [ImageComponent],
  	providers: [],
  	exports: [ImageComponent] })
export class ImageComponentModule {
}
