import {Component, OnInit} from '@angular/core';
import {Todo} from "./todo";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {tap} from "rxjs/operators";
import {createTodo, getListTodo} from "./state/todos.actions";
import {LoadingStatus, TodosState} from "./state/todos.reducer";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  todos$: Observable<Todo[]> = this.store.select((state) => state.todos.list);

  loadingTodosStatus$: Observable<LoadingStatus> = this.store.select((state) => state.todos.loadingListStatus);

  loadingSubmitFormStatus$: Observable<LoadingStatus> = this.store.select((state) => state.todos.loadingSubmitFormStatus);

  constructor(private store: Store<{ todos: TodosState }>) {
  }

  ngOnInit() {
    this.store.dispatch(getListTodo());
  }

  createTodo(todo: Todo) {
    this.store.dispatch(createTodo({todo}));
  }
}
