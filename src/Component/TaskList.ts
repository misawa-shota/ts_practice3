import { type TaskListType } from "../Types/TaskListType.js";
import { UiComponent } from "./UiComponent.js";

export class TaskList extends UiComponent<HTMLDivElement> {

  constructor(private taskList: TaskListType) {
    super("#task-list-template");
    this.setup();
  }

  setup() {
    this.element.querySelector("h2")!.textContent = `${this.taskList}`;
    this.element.querySelector("ul")!.id = `${this.taskList}`;
  }
}