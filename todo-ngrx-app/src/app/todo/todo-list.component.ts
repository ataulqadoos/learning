import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo, TodoService} from '../todo.service';
import {State, Store} from "@ngrx/store";
import {Observable, of} from "rxjs";
import {selectAllTodos, selectCompletedTodos} from "./todo.selectors";
import {loadTodos, toggleTodo} from "./todo.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList$: Observable<Todo[]> = of([]);
  completedTodos$: Observable<Todo[]> = of([]);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
    this.todoList$ = this.store.select(selectAllTodos);
    this.completedTodos$ = this.store.select(selectCompletedTodos);
  }

  toggleCompletion(id: number): void {
    this.store.dispatch(toggleTodo({ id }));
  }

}
