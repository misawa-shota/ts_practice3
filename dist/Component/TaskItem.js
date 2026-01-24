export class TaskItem {
    templateEl;
    element;
    Task;
    constructor(templateId, _task) {
        this.templateEl = document.querySelector(templateId);
        const clone = this.templateEl.content.cloneNode(true);
        this.element = clone.firstElementChild;
        this.Task = _task;
        this.setup();
        this.mount();
    }
    setup() {
        const titleEl = this.element.querySelector(".task-item-title");
        const descriptionEl = this.element.querySelector(".task-item-description");
        titleEl.textContent = this.Task.title;
        descriptionEl.textContent = this.Task.description || "";
    }
    mount() {
        const container = document.querySelector("#container");
        container.appendChild(this.element);
    }
}
//# sourceMappingURL=TaskItem.js.map