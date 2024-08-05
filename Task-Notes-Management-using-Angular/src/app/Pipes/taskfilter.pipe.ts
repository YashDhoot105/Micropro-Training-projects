import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Interfaces/task';

@Pipe({
  name: 'taskfilter',
  standalone: true
})
export class TaskfilterPipe implements PipeTransform {

  transform(tasks: Task[], searchedtask: string): unknown {

    if (!searchedtask || !tasks) {
      return tasks;
    }
    return tasks.filter(tasks =>
      this.objectcontains(tasks, searchedtask)
    )
  }
  objectcontains(tasks: Task, searchedtask: string): boolean {
    const taskString = JSON.stringify(tasks).toLowerCase();
    return taskString.includes(searchedtask.toLowerCase());  }

}
