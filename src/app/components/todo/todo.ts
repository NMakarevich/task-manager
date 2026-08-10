import { Component, inject, input, signal } from '@angular/core';
import { TodoItem } from '@services/types';
import { MatCheckbox } from '@angular/material/checkbox';
import { TodoService } from '@services/todo-service';
import { ActivatedRoute } from '@angular/router';
import { MatFormField, MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-todo',
  imports: [MatCheckbox, MatFormField, MatInput, FormsModule, MatIconButton, MatIcon],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  private todoService = inject(TodoService);
  private activatedRoute = inject(ActivatedRoute);
  todo = input<TodoItem>({} as TodoItem);

  isEditMode = signal(false);

  todoText = signal('');

  currentDate = this.activatedRoute.snapshot.params['date'];

  handleCheckboxChange = (isChecked: boolean) => {
    this.todoService.updateTodo({ ...this.todo(), isDone: isChecked }, this.currentDate);
  };

  toggleEditMode = () => {
    this.todoText.update(() => this.todo().text);
    this.isEditMode.update((isEdit) => !isEdit);
  };

  updateTodo = () => {
    this.todoService.updateTodo({ ...this.todo(), text: this.todoText() }, this.currentDate);
    this.toggleEditMode();
  };

  deleteTodo = () => {
    this.todoService.deleteTodo(this.todo().id, this.currentDate);
  };
}
