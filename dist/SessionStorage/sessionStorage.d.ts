import type { Tasks } from "../Types/TasksType.js";
import type { Task } from "../Types/TaskType.js";
declare class SessionStorage {
    tasks: Tasks;
    constructor();
    addTask(key: string, task: Task): void;
    getTask(key: string): void;
    getNewTask(key: string): void;
    setTasks(key: string, tasks: Tasks): void;
    removeTask(key: string, taskToRemove: Task): void;
}
export declare const sessionStorageInstance: SessionStorage;
export {};
//# sourceMappingURL=SessionStorage.d.ts.map