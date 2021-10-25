import { createReducer, on } from '@ngrx/store';
import {Todo} from "../todo";
import {createTodo, getListTodo, listTodoLoaded, todoCreated, updateTodo} from "./todos.actions";

export type LoadingStatus = 'idle' | 'loading' | 'error';

export interface TodosState {
  list: Todo[],
  loadingListStatus: LoadingStatus,
  loadingSubmitFormStatus: LoadingStatus,
}

export const initialState: TodosState = {
  list: [],
  loadingListStatus: 'idle',
  loadingSubmitFormStatus: 'idle'
};

export const todosReducer = createReducer(
  initialState,
  on(listTodoLoaded, (state, { todos }) => {
    return { ...state, list: todos, loadingListStatus: 'idle' }
  }),
  on(getListTodo, (state) => {
    return { ...state, loadingListStatus: 'loading' }
  }),
  on(createTodo, (state) => {
    return { ...state, loadingSubmitFormStatus: 'loading'}
  }),
  on(todoCreated, (state) => {
    return { ...state, loadingSubmitFormStatus: 'idle'}
  })
)
