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
        this.mount();
    }
    setup() {
        this.element.querySelector("h2").textContent = `${this.taskList}`;
        this.element.querySelector("ul").id = `${this.taskList}-list`;
    }
    mount() {
        const targetEl = document.getElementById("container");
        targetEl.insertAdjacentElement("beforeend", this.element);
    }
}
//# sourceMappingURL=TaskList.js.map