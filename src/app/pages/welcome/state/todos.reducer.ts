import { createReducer, on } from '@ngrx/store';
import {Todo} from "../todo";
import {listTodoLoaded} from "./todos.actions";

export const initialState: Todo[] = [];

export const todosReducer = createReducer(
  initialState,
  on(listTodoLoaded, (state, { todos }) => todos)
)
