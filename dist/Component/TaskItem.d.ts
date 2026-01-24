import type { Task } from "../Types/TaskType.js";
export declare class TaskItem {
    templateEl: HTMLTemplateElement;
    element: HTMLLIElement;
    Task: Task;
    constructor(templateId: string, _task: Task);
    setup(): void;
    mount(): void;
}
//# sourceMappingURL=TaskItem.d.ts.map