import type { TaskTodos } from "../Types/TaskTodosType.js";
import type { Task } from "../Types/TaskType.js";
import { TaskItem } from "../Component/TaskItem.js";
import { sessionStorageInstance } from "../SessionStorage/SessionStorage.js";
import { jsonTransfer } from "../Transfer/JsonTransfer.js";

class TaskTodosAdmin {
  taskTodos: TaskTodos;

  constructor() {
    this.taskTodos = [];
  }

  addTask(task: Task) {
    const jsonTodosStorage = sessionStorageInstance.getItem();
    console.log(jsonTodosStorage);
    if (jsonTodosStorage) {
      const todosStorage = jsonTransfer.jsonParse(jsonTodosStorage);
      console.log(todosStorage);
      this.taskTodos = [...todosStorage, task];
      sessionStorageInstance.setItem(this.taskTodos);
      return;
    }
    this.taskTodos.push(task);
    sessionStorageInstance.setItem(this.taskTodos);
  }

  getTasks() {
    const jsonTodosStorage = sessionStorageInstance.getItem();
    if (jsonTodosStorage) {
      const todosStorage = jsonTransfer.jsonParse(jsonTodosStorage);
      todosStorage.forEach((task: Task) => {
        const taskItem = new TaskItem(task);
        taskItem.mount("#Todo");
      });
    }
  }

  getNewTask() {
    const jsonTodosStorage = sessionStorageInstance.getItem();
    if (jsonTodosStorage) {
      const todosStorage = jsonTransfer.jsonParse(jsonTodosStorage);
      const newTask = todosStorage[todosStorage.length - 1];
      const taskItem = new TaskItem(newTask);
      taskItem.mount("#Todo");
    }
  }
}

export const taskTodosAdmin = new TaskTodosAdmin();