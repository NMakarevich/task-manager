import { Service, signal } from '@angular/core';
import { LS_TASKS } from '@shared/constants';
import { TodoItem, TodoList } from '@services/types';

@Service()
export class TodoService {
  initTodos = () => {
    const todosLS = localStorage.getItem(LS_TASKS);
    if (todosLS) {
      return JSON.parse(todosLS) as TodoList;
    } else return {};
  };

  todos = signal(this.initTodos());

  addTodo = (text: string, date: string) => {
    const todo: TodoItem = {
      text,
      isDone: false,
      id: this.todos()[date] ? this.todos()[date].length + 1 : 1,
    };
    this.todos.update((todos) => {
      if (todos[date]) {
        todos[date].push(todo);
      } else {
        todos[date] = [todo];
      }
      return { ...todos };
    });
    localStorage.setItem(LS_TASKS, JSON.stringify(this.todos()));
  };

  updateTodo = (todo: TodoItem, date: string) => {
    this.todos.update((todos) => {
      const index = todos[date].findIndex(({ id }) => id === todo.id);
      todos[date][index] = { ...todo };
      return { ...todos };
    });
  };

  deleteTodo = (id: number, date: string) => {
    this.todos.update((todos) => {
      todos[date] = todos[date].filter((todo) => id !== todo.id);
      return { ...todos };
    });
  };
}
