import type { TaskTodos } from "../Types/TaskTodosType.js";

class SessionStorage {
  getItem() {
    return sessionStorage.getItem('Todos');
  }

  setItem(taskTodos: TaskTodos) {
    sessionStorage.setItem('Todos', JSON.stringify(taskTodos));
  }
}

export const sessionStorageInstance = new SessionStorage();