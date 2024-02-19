import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TodoService } from '../todo.service'; // Adjust the import path as needed
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {

  loadTodos$ = createEffect(() => this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() => this.todoService.getTodos()
        .pipe(
          map(todos => {
            return TodoActions.loadTodosSuccess({ todos })
          }),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}
