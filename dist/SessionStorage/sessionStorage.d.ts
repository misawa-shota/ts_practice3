import type { TaskTodos } from "../Types/TaskTodosType.js";
declare class SessionStorage {
    getItem(): string | null;
    setItem(taskTodos: TaskTodos): void;
}
export declare const sessionStorageInstance: SessionStorage;
export {};
//# sourceMappingURL=SessionStorage.d.ts.map