import { Component } from '@angular/core';
import { Todos } from '@components/todos/todos';

@Component({
  selector: 'app-todo-page',
  imports: [Todos],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.scss',
})
export class TodoPage {}
