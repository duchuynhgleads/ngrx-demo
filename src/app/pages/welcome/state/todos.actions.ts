import { createAction, props } from '@ngrx/store';
import {Todo} from "../todo";

export const createTodo = createAction(
  '[Todo] Create Todo',
  props<{ todo: Todo }>()
);

export const todoCreated = createAction(
  '[Todo] Todo Created'
);

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todo: Todo }>()
);

export const todoUpdated = createAction(
  '[Todo] Todo Updated'
);

export const getListTodo = createAction(
  '[Todo] Get List Todo'
)

export const listTodoLoaded = createAction(
  '[Todo] List Todo Loaded',
  props<{ todos: Todo[] }>()
)
