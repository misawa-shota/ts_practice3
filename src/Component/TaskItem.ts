import type { Task } from "../Types/TaskType.js";

export class TaskItem {
  templateEl: HTMLTemplateElement;
  element: HTMLLIElement;
  Task: Task;

  constructor(templateId: string, _task: Task) {
    this.templateEl = document.querySelector(templateId)! as HTMLTemplateElement;
    const clone = this.templateEl.content.cloneNode(true) as DocumentFragment;
    this.element = clone.firstElementChild! as HTMLLIElement;
    this.Task = _task;
    this.setup();
    this.mount();
  }

  setup() {
    const titleEl = this.element.querySelector(".task-item-title")! as HTMLHeadingElement;
    const descriptionEl = this.element.querySelector(".task-item-description")! as HTMLParagraphElement;

    titleEl.textContent = this.Task.title;
    descriptionEl.textContent = this.Task.description || "";
  }

  mount() {
    const container = document.querySelector("#container")! as HTMLDivElement;
    container.appendChild(this.element);
  }
}