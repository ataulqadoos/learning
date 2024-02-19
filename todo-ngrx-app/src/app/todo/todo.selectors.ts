import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, todoFeatureKey } from './todo.reducer';

export const selectTodoState = createFeatureSelector<State>(todoFeatureKey);

export const selectAllTodos = createSelector(
  selectTodoState,
  (state: State) => {
    return state.todos
  }
);

export const selectCompletedTodos = createSelector(
  selectAllTodos,
  (todos) => todos.filter(todo => todo.completed)
);
