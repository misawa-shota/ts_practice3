import { TaskItem } from "../Component/TaskItem.js";
class SessionStorage {
    tasks;
    constructor() {
        this.tasks = [];
    }
    addTask(key, task) {
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
    getTask(key) {
        const jsonStorage = sessionStorage.getItem(key);
        if (jsonStorage) {
            const todosStorage = JSON.parse(jsonStorage);
            todosStorage.forEach((task) => {
                const taskItem = new TaskItem(task);
                taskItem.mount(`#${key}`);
            });
        }
    }
    getNewTask(key) {
        const jsonStorage = sessionStorage.getItem(key);
        if (jsonStorage) {
            const todosStorage = JSON.parse(jsonStorage);
            const newTask = todosStorage[todosStorage.length - 1];
            const taskItem = new TaskItem(newTask);
            taskItem.mount(`#${key}`);
        }
    }
    setTasks(key, tasks) {
        sessionStorage.setItem(key, JSON.stringify(tasks));
    }
    removeTask(key, taskToRemove) {
        const jsonStorage = sessionStorage.getItem(key);
        if (jsonStorage) {
            const storage = JSON.parse(jsonStorage);
            console.log(taskToRemove);
            storage.forEach((task) => {
                console.log(task);
            });
            const updatedTasks = storage.filter((task) => JSON.stringify(task) !== JSON.stringify(taskToRemove));
            console.log(updatedTasks);
            document.querySelectorAll(`#${key} > li`).forEach((el) => el.remove());
            this.setTasks(key, updatedTasks);
            updatedTasks.forEach((task) => {
                const taskItem = new TaskItem(task);
                taskItem.mount(`#${key}`);
            });
        }
    }
}
export const sessionStorageInstance = new SessionStorage();
//# sourceMappingURL=SessionStorage.js.map