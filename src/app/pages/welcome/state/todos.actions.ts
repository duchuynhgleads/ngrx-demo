import { createAction, props } from '@ngrx/store';
import {Todo} from "../todo";

export const createTodo = createAction(
  '[Todo] Create Todo',
  props<{ todo: Todo }>()
);

export const getListTodo = createAction(
  '[Todo] Get List Todo'
)

export const listTodoLoaded = createAction(
  '[Todo] List Todo Loaded',
  props<{ todos: Todo[] }>()
)
