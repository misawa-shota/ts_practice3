class TaskTodosAdmin {
    taskTodos;
    constructor() {
        this.taskTodos = [];
    }
    addTask(task) {
        this.taskTodos = [...this.taskTodos, task];
    }
}
export const taskTodosAdmin = new TaskTodosAdmin();
//# sourceMappingURL=TaskTodosAdmin.js.map