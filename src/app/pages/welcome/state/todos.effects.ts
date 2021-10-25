import {Injectable} from "@angular/core";
import {TodoService} from "../../../core/api/todo.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {createTodo, getListTodo, listTodoLoaded, todoCreated, todoUpdated, updateTodo} from "./todos.actions";
import {catchError, map, mergeMap, startWith, switchMap, tap} from "rxjs/operators";
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
    map(action => action.todo),
    switchMap((todo) => this.todoService.create(todo)),
    switchMap(() => [
      getListTodo(),
      todoCreated()
    ]),
    catchError(err => {
      console.log(err);
      return EMPTY;
    })
  ));

  updateTodo$ = createEffect(() => this.action$.pipe(
    ofType(updateTodo),
    map(action => action.todo),
    switchMap((todo) => this.todoService.update(todo.id as number, todo)),
    switchMap(() => [
      getListTodo(),
      todoUpdated()
    ]),
    catchError(err => {
      console.log(err);
      return EMPTY;
    })
  ));

}
