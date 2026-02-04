import type { TaskTodos } from "../Types/TaskTodosType.js";
import type { Task } from "../Types/TaskType.js";
import { TaskItem } from "../Component/TaskItem.js";

class TaskTodosAdmin {
  taskTodos: TaskTodos;

  constructor() {
    this.taskTodos = [];
  }

  addTask(task: Task) {
    this.taskTodos = [...this.taskTodos, task];
    console.log(this.taskTodos);
  }

  getTasks() {
    this.taskTodos.forEach((task) => {
      const taskItem = new TaskItem(task);
      taskItem.mount("#Todo");
    });
  }
}

export const taskTodosAdmin = new TaskTodosAdmin();