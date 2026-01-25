import { taskListData } from "../Types/TaskListType.js";
export class TaskList {
    templateEl;
    element;
    taskList;
    constructor(templateId, _taskList) {
        this.templateEl = document.querySelector(templateId);
        const clone = this.templateEl.content.cloneNode(true);
        this.element = clone.firstElementChild;
        this.taskList = _taskList;
        this.setup();
    }
    setup() {
        this.element.querySelector("h2").textContent = `${this.taskList}`;
        this.element.querySelector("ul").id = `${this.taskList}`;
    }
    mount(selector) {
        const targetEl = document.querySelector(selector);
        targetEl.insertAdjacentElement("beforeend", this.element);
    }
}
//# sourceMappingURL=TaskList.js.map