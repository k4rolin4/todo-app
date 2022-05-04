import { 
    Component, 
    ViewEncapsulation, 
    ChangeDetectionStrategy 
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';

@Component({ 
    selector: 'lib-task-list', 
    templateUrl: './task-list.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class TaskListComponent {
    task$: Observable<TaskDTO[]> = of([
        {
            id: '1',
            text: 'cokolwiek',
            done: true
        }
    ])
}
