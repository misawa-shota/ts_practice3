import { TaskItem } from "./TaskItem.js";
export class TaskForm {
    element;
    titleInputEl;
    descriptionEl;
    constructor() {
        this.element = document.querySelector("#task-form");
        this.titleInputEl = this.element.querySelector("#title");
        this.descriptionEl = this.element.querySelector("#description");
        this.bindEvents();
        this.clearInput();
    }
    handleSubmit(event) {
        event.preventDefault();
        const taskItem = new TaskItem("#task-item-template", {
            title: this.titleInputEl.value,
            description: this.descriptionEl.value,
        });
        taskItem.mount("#Todo");
        this.clearInput();
    }
    bindEvents() {
        this.element.addEventListener("submit", this.handleSubmit.bind(this));
    }
    clearInput() {
        this.titleInputEl.value = "";
        this.descriptionEl.value = "";
    }
}
//# sourceMappingURL=TaskForm.js.map