import {Todo} from "../todo.service";
import {createAction, props} from "@ngrx/store";

export const loadTodos = createAction('[Todo List] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo List] Load Todo List',
  props<{ todos: Todo[] }>()
);

export const addTodo = createAction(
  '[Todo List] Add Todo',
  props<{ todo: Todo }>()
);

export const toggleTodo = createAction(
  '[Todo List] Toggle Todo',
  props<{ id: number }>()
);
