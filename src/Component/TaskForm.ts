export class TaskForm {
  element: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionEl: HTMLTextAreaElement;

  constructor() {
    this.element = document.querySelector("#task-form")! as HTMLFormElement;
    this.titleInputEl = this.element.querySelector("#title")! as HTMLInputElement;
    this.descriptionEl = this.element.querySelector("#description")! as HTMLTextAreaElement;
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