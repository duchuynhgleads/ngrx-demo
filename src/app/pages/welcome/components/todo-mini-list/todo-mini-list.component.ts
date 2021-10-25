import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../todo";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-todo-mini-list',
  templateUrl: './todo-mini-list.component.html',
  styleUrls: ['./todo-mini-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoMiniListComponent implements OnInit {

  @Output() onUpdateTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Input() todos: Todo[] | null = [];
  updating$ = new BehaviorSubject(false);
  updatingTodo: Todo | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  updateTodo(todo: Todo, newValue: Todo) {
    console.log('Update todo:', todo);
    console.log('Update todo new value:', {...todo, ...newValue});
    this.updating$.next(true);
    this.onUpdateTodo.emit({...todo, ...newValue});
    this.updatingTodo = todo;
  }
}
