export type TodoList = Record<string, TodoItem[]>;

export interface TodoItem {
  text: string;
  isDone: boolean;
  id: number;
}
