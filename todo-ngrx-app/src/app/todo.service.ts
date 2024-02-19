import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Develop Todo App', completed: false }
  ];

  constructor() { }

  getTodos(): Observable<Todo[]> {
    // Simulating a real HTTP request with an Observable
    return of(this.todos);
  }
}
