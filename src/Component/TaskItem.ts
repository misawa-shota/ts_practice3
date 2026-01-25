import type { Task } from "../Types/TaskType.js";
import { type TaskListType, taskListData } from "../Types/TaskListType.js";

export class TaskItem {
  templateEl: HTMLTemplateElement;
  element: HTMLLIElement;
  task: Task;

  constructor(templateId: string, _task: Task) {
    this.templateEl = document.querySelector(templateId)! as HTMLTemplateElement;
    const clone = this.templateEl.content.cloneNode(true) as DocumentFragment;
    this.element = clone.firstElementChild! as HTMLLIElement;
    this.task = _task;
    this.setup();
    this.bindEvent();
  }

  setup() {
    const titleEl = this.element.querySelector(".task-item-title")! as HTMLHeadingElement;
    const descriptionEl = this.element.querySelector(".task-item-description")! as HTMLParagraphElement;

    titleEl.textContent = this.task.title;
    descriptionEl.textContent = this.task.description ? this.task.description : "";
  }

  mount(selector: string) {
    const targetEl = document.querySelector(selector)!;
    targetEl.insertAdjacentElement("beforeend", this.element);
  }

  handleClick(event: MouseEvent) {
    event.preventDefault();
    const currentTaskListData = this.element.parentElement!.id as TaskListType;
    const currentIndex = taskListData.indexOf(currentTaskListData);
    if (currentIndex === -1) {
      throw new Error("Invalid Task List Type");
    }
    const nextIndex = currentIndex + 1;
    if (nextIndex < taskListData.length) {
      const nextMountPoint = document.getElementById(`${taskListData[nextIndex]}`)!;
      nextMountPoint.insertAdjacentElement("beforeend", this.element);
      return;
    }
    this.element.remove();
  }

  bindEvent() {
    this.element.addEventListener("click", this.handleClick.bind(this));
  }
}