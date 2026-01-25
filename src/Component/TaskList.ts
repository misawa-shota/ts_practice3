import { taskListData, type TaskListType } from "../Types/TaskListType.js";

export class TaskList {
  templateEl: HTMLTemplateElement;
  element: HTMLDivElement;
  taskList: TaskListType;

  constructor(templateId: string, _taskList: TaskListType) {
    this.templateEl = document.querySelector(templateId)! as HTMLTemplateElement;
    const clone = this.templateEl.content.cloneNode(true) as DocumentFragment;
    this.element = clone.firstElementChild! as HTMLDivElement;
    this.taskList = _taskList;
    this.setup();
  }

  setup() {
    this.element.querySelector("h2")!.textContent = `${this.taskList}`;
    this.element.querySelector("ul")!.id = `${this.taskList}`;
  }

  mount(selector: string) {
    const targetEl = document.querySelector(selector)!;
    targetEl.insertAdjacentElement("beforeend", this.element);
  }
}