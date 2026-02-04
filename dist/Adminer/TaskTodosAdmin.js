class TaskTodosAdmin {
    taskTodos;
    constructor() {
        this.taskTodos = [];
    }
    addTask(task) {
        this.taskTodos = [...this.taskTodos, task];
        console.log(this.taskTodos);
    }
}
export const taskTodosAdmin = new TaskTodosAdmin();
//# sourceMappingURL=TaskTodosAdmin.js.map