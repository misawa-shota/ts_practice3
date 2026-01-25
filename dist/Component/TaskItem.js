import { taskListData } from "../Types/TaskListType.js";
export class TaskItem {
    templateEl;
    element;
    task;
    constructor(templateId, _task) {
        this.templateEl = document.querySelector(templateId);
        const clone = this.templateEl.content.cloneNode(true);
        this.element = clone.firstElementChild;
        this.task = _task;
        this.setup();
        this.bindEvent();
    }
    setup() {
        const titleEl = this.element.querySelector(".task-item-title");
        const descriptionEl = this.element.querySelector(".task-item-description");
        titleEl.textContent = this.task.title;
        descriptionEl.textContent = this.task.description ? this.task.description : "";
    }
    mount(selector) {
        const targetEl = document.querySelector(selector);
        targetEl.insertAdjacentElement("beforeend", this.element);
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
            const nextMountPoint = document.getElementById(`${taskListData[nextIndex]}`);
            nextMountPoint.insertAdjacentElement("beforeend", this.element);
            return;
        }
        this.element.remove();
    }
    bindEvent() {
        this.element.addEventListener("click", this.handleClick.bind(this));
    }
}
//# sourceMappingURL=TaskItem.js.map