export class TaskForm {
    element;
    titleInputEl;
    descriptionEl;
    constructor() {
        this.element = document.querySelector("#task-form");
        this.titleInputEl = this.element.querySelector("#title");
        this.descriptionEl = this.element.querySelector("#description");
        this.bindEvents();
    }
    handleSubmit() {
        console.log(this.titleInputEl.value);
        console.log(this.descriptionEl.value);
    }
    bindEvents() {
        this.element.addEventListener("submit", this.handleSubmit.bind(this));
    }
}
//# sourceMappingURL=TaskForm.js.map