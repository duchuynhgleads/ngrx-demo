import {Injectable} from "@angular/core";
import {TodoService} from "../../../core/api/todo.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {createTodo, getListTodo, listTodoLoaded} from "./todos.actions";
import {catchError, map, mergeMap, startWith, tap} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Injectable()
export class TodosEffects {
  constructor(private readonly todoService: TodoService,
              private readonly action$: Actions) {
  }

  getAllTodos$ = createEffect(() => this.action$.pipe(
    ofType(getListTodo),
    mergeMap(() => this.todoService.getAll()
      .pipe(
        map((todos) => listTodoLoaded({todos})),
        catchError(() => EMPTY)
      ))
  ))

  createTodo$ = createEffect(() => this.action$.pipe(
    ofType(createTodo),
    tap(_ => console.log('create todo: ', _)),
    map(action => action.todo),
    mergeMap((todo) => this.todoService.create(todo)
      .pipe(
        map(todo => getListTodo()),
        catchError(() => EMPTY)
      )
    )
  ));

}
