import { Component, computed, inject, signal } from '@angular/core';
import { TodoService } from '@services/todo-service';
import { Todo } from '@components/todo/todo';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { routesList } from '@shared/routes/routes';

@Component({
  selector: 'app-todos',
  imports: [
    Todo,
    MatButton,
    MatIcon,
    MatLabel,
    MatFormField,
    MatInput,
    FormsModule,
    DatePipe,
    RouterLink,
  ],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  todoService = inject(TodoService);
  activatedRoute = inject(ActivatedRoute);
  currentDate = this.activatedRoute.snapshot.params['date'];

  newTodo = signal('');
  searchTodo = signal('');

  todos = computed(() => {
    return this.todoService
      .todos()
      [this.currentDate]?.filter((todo) =>
        this.searchTodo()
          ? todo.text.toLocaleLowerCase().includes(this.searchTodo().toLocaleLowerCase())
          : true
      );
  });

  activeTodos = computed(() => {
    return this.todos()?.filter((todo) => !todo.isDone);
  });

  completedTodos = computed(() => {
    return this.todos()?.filter((todo) => todo.isDone);
  });

  addTodo = () => {
    this.todoService.addTodo(this.newTodo(), this.currentDate);
    this.newTodo.update(() => '');
  };
  protected readonly routesList = routesList;
}
