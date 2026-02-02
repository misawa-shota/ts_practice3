import type { Task } from "../Types/TaskType.js";
import { type TaskListType, taskListData } from "../Types/TaskListType.js";
import { UiComponent } from "./UiComponent.js";
import type { ClickAbleElement } from "../Types/ClickAbleElementType.js";
import { taskTodosAdmin } from "../Adminer/TaskTodosAdmin.js";

export class TaskItem extends UiComponent<HTMLLIElement> implements ClickAbleElement {

  constructor(private task: Task) {
    super("#task-item-template");
    this.setup();
    this.bindEvent();
  }

  setup() {
    const titleEl = this.element.querySelector(".task-item-title")! as HTMLHeadingElement;
    const descriptionEl = this.element.querySelector(".task-item-description")! as HTMLParagraphElement;

    titleEl.textContent = this.task.title;
    descriptionEl.textContent = this.task.description ? this.task.description : "";
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