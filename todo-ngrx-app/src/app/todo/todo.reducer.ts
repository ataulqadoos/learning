import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import {Todo} from "../todo.service";

export const todoFeatureKey = 'todo';

export interface State {
  todos: Todo[];
}

export const initialState: State = {
  todos: [],
};

export const reducer = createReducer(
  initialState,
  on(TodoActions.loadTodosSuccess, (state, { todos }) => {
    let newVar = {...state, todos};
    return newVar;
  }),
  on(TodoActions.addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),
  on(TodoActions.toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  }))
);
