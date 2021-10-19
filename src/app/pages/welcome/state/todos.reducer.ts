import { createReducer, on } from '@ngrx/store';
import {Todo} from "../todo";
import {getListTodo, listTodoLoaded} from "./todos.actions";

export type LoadingStatus = 'idle' | 'loading' | 'error';

export interface TodosState {
  list: Todo[],
  loadingListStatus: LoadingStatus,
}

export const initialState: TodosState = {
  list: [],
  loadingListStatus: 'idle'
};

export const todosReducer = createReducer(
  initialState,
  on(listTodoLoaded, (state, { todos }) => {
    return { list: todos, loadingListStatus: 'idle' }
  }),
  on(getListTodo, (state) => {
    return { ...state, loadingListStatus: 'loading' }
  })
)
