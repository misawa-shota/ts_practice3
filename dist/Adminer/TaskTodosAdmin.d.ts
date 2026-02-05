import type { TaskTodos } from "../Types/TaskTodosType.js";
import type { Task } from "../Types/TaskType.js";
declare class TaskTodosAdmin {
    taskTodos: TaskTodos;
    constructor();
    addTask(task: Task): void;
    getTasks(): void;
    getNewTask(): void;
}
export declare const taskTodosAdmin: TaskTodosAdmin;
export {};
//# sourceMappingURL=TaskTodosAdmin.d.ts.map