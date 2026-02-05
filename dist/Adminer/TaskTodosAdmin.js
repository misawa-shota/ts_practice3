import { TaskItem } from "../Component/TaskItem.js";
import { sessionStorageInstance } from "../SessionStorage/SessionStorage.js";
import { jsonTransfer } from "../Transfer/jsonTransfer.js";
class TaskTodosAdmin {
    taskTodos;
    constructor() {
        this.taskTodos = [];
    }
    addTask(task) {
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
            todosStorage.forEach((task) => {
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
//# sourceMappingURL=TaskTodosAdmin.js.map