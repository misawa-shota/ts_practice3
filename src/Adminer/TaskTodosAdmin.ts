import type { TaskTodos } from "../Types/TaskTodosType.js";
import type { Task } from "../Types/TaskType.js";

class TaskTodosAdmin {
  taskTodos: TaskTodos;

  constructor() {
    this.taskTodos = [];
  }

  addTask(task: Task) {
    this.taskTodos = [...this.taskTodos, task];
  }
}

export const taskTodosAdmin = new TaskTodosAdmin();