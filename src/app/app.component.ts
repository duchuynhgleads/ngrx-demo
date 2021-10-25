import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Todo} from "./pages/welcome/todo";
import {tap} from "rxjs/operators";
import {TodosState} from "./pages/welcome/state/todos.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  todos$: Observable<Todo[]> = this.store.select((state) => state.todos.list);

  constructor(private store: Store<{ todos: TodosState }>) {
  }
}
