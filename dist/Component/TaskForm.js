import { taskTodosAdmin } from "../Adminer/TaskTodosAdmin.js";
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
        const task = {
            title: this.titleInputEl.value,
            description: this.descriptionEl.value,
        };
        // 作成したタスクをTodosを管理する配列に追加
        taskTodosAdmin.addTask(task);
        taskTodosAdmin.getNewTask();
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