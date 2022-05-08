import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageDTO } from '../../../application/ports/secondary/image.dto';
import { GETS_ALL_IMAGE_DTO, GetsAllImageDtoPort } from '../../../application/ports/secondary/gets-all-image.dto-port';

@Component({ 
    selector: 'lib-image', 
    templateUrl: './image.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class ImageComponent {
  images$: Observable<ImageDTO[]> = this._getsAllImageDto.getAll();

  constructor(@Inject(GETS_ALL_IMAGE_DTO) private _getsAllImageDto: GetsAllImageDtoPort) {
  }
}
