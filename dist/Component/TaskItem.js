import { taskListData } from "../Types/TaskListType.js";
import { UiComponent } from "./UiComponent.js";
import { sessionStorageInstance } from "../SessionStorage/SessionStorage.js";
export class TaskItem extends UiComponent {
    task;
    constructor(task) {
        super("#task-item-template");
        this.task = task;
        this.setup();
        this.bindEvent();
    }
    setup() {
        const titleEl = this.element.querySelector(".task-item-title");
        const descriptionEl = this.element.querySelector(".task-item-description");
        titleEl.textContent = this.task.title;
        descriptionEl.textContent = this.task.description ? this.task.description : "";
    }
    handleClick(event) {
        event.preventDefault();
        const currentTaskListData = this.element.parentElement.id;
        const currentIndex = taskListData.indexOf(currentTaskListData);
        if (currentIndex === -1) {
            throw new Error("Invalid Task List Type");
        }
        const nextIndex = currentIndex + 1;
        if (nextIndex < taskListData.length) {
            const nextKey = taskListData[nextIndex];
            if (!nextKey) {
                throw new Error("Invalid next task list key");
            }
            const nextMountPoint = document.getElementById(`${nextKey}`);
            nextMountPoint.insertAdjacentElement("beforeend", this.element);
            sessionStorageInstance.addTask(nextKey, this.task);
            sessionStorageInstance.removeTask(currentTaskListData, this.task);
            return;
        }
        this.element.remove();
        sessionStorageInstance.removeTask(currentTaskListData, this.task);
    }
    bindEvent() {
        this.element.addEventListener("click", this.handleClick.bind(this));
    }
}
//# sourceMappingURL=TaskItem.js.map