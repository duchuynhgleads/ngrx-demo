import { Pipe, PipeTransform } from '@angular/core';
import {Status, Todo} from "../todo";

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], status: Status): Todo[] {
    return todos.filter(todo => todo.status === status);
  }

}
