import { TaskItem } from "./TaskItem.js";

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
    const taskItem = new TaskItem({
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