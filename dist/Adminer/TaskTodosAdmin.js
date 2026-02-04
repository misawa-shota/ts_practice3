import { TaskItem } from "../Component/TaskItem.js";
class TaskTodosAdmin {
    taskTodos;
    constructor() {
        this.taskTodos = [];
    }
    addTask(task) {
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
//# sourceMappingURL=TaskTodosAdmin.js.map