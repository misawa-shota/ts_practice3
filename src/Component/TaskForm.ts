import { TaskItem } from "./TaskItem.js";
import { taskTodosAdmin } from "../Adminer/TaskTodosAdmin.js";
export class TaskForm {
  element: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionEl: HTMLTextAreaElement;

  constructor() {
    this.element = document.querySelector("#task-form")! as HTMLFormElement;
    this.titleInputEl = this.element.querySelector("#title")! as HTMLInputElement;
    this.descriptionEl = this.element.querySelector("#description")! as HTMLTextAreaElement;
    this.bindEvents();
    this.clearInput();
  }
  handleSubmit(event: Event) {
    event.preventDefault();
    const task = {
      title: this.titleInputEl.value,
      description: this.descriptionEl.value,
    }

    // 作成したタスクをTodosを管理する配列に追加
    taskTodosAdmin.addTask(task);

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