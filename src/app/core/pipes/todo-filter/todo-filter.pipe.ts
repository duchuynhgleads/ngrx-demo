import { Pipe, PipeTransform } from '@angular/core';
import {Status, Todo} from "../../../pages/welcome/todo";

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[] | null, status: Status): Todo[] {
    if (!todos) return [];
    return todos.filter(todo => todo.status === status);
  }

}
