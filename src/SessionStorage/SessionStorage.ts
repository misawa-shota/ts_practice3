import type { Tasks } from "../Types/TasksType.js";
import type { Task } from "../Types/TaskType.js";
import { TaskItem } from "../Component/TaskItem.js";

class SessionStorage {
  tasks: Tasks;

  constructor() {
    this.tasks = [];
  }

  addTask(key: string, task: Task) {
    const jsonStorage = sessionStorage.getItem(key);
    console.log(jsonStorage);
    if (jsonStorage) {
      const todosStorage = JSON.parse(jsonStorage);
      console.log(todosStorage);
      this.tasks = [...todosStorage, task];
      this.setTasks(key, this.tasks);
      return;
    }
    console.log(this.tasks);
    this.tasks.push(task);
    this.setTasks(key, this.tasks);
  }
  getTask(key: string) {
    const jsonStorage = sessionStorage.getItem(key);
    if (jsonStorage) {
      const todosStorage = JSON.parse(jsonStorage);
      todosStorage.forEach((task: Task) => {
        const taskItem = new TaskItem(task);
        taskItem.mount(`#${key}`);
      });
      return;
    }
    return;
  }

  getNewTask(key: string) {
    const jsonStorage = sessionStorage.getItem(key);
    if (jsonStorage) {
      const todosStorage = JSON.parse(jsonStorage);
      const newTask = todosStorage[todosStorage.length - 1];
      const taskItem = new TaskItem(newTask);
      taskItem.mount(`#${key}`);
    }
  }

  setTasks(key: string, tasks: Tasks) {
    sessionStorage.setItem(key, JSON.stringify(tasks));
  }

  removeTask(key: string, taskToRemove: Task) {
    const jsonStorage = sessionStorage.getItem(key);
    if (jsonStorage) {
      const storage: Tasks = JSON.parse(jsonStorage);
      console.log(taskToRemove);
      storage.forEach((task) => {
        console.log(task);
      });
      const updatedTasks = storage.filter(
        (task) => JSON.stringify(task) !== JSON.stringify(taskToRemove)
      );
      console.log(updatedTasks);
      document.querySelectorAll(`#${key} > li`).forEach((el) => el.remove());
      this.setTasks(key, updatedTasks);
      updatedTasks.forEach((task: Task) => {
        const taskItem = new TaskItem(task);
        taskItem.mount(`#${key}`);
      });
    }
  }
}

export const sessionStorageInstance = new SessionStorage();