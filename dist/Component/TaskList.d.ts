import { type TaskListType } from "../Types/TaskListType.js";
export declare class TaskList {
    templateEl: HTMLTemplateElement;
    element: HTMLDivElement;
    taskList: TaskListType;
    constructor(templateId: string, _taskList: TaskListType);
    setup(): void;
    mount(): void;
}
//# sourceMappingURL=TaskList.d.ts.map