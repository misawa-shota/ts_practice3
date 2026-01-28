import type { Task } from "../Types/TaskType.js";
import { UiComponent } from "./UiComponent.js";
import type { ClickAbleElement } from "../Types/ClickAbleElementType.js";
export declare class TaskItem extends UiComponent<HTMLLIElement> implements ClickAbleElement {
    private task;
    constructor(task: Task);
    setup(): void;
    handleClick(event: MouseEvent): void;
    bindEvent(): void;
}
//# sourceMappingURL=TaskItem.d.ts.map