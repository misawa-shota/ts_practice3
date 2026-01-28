import {} from "../Types/TaskListType.js";
import { UiComponent } from "./UiComponent.js";
export class TaskList extends UiComponent {
    taskList;
    constructor(taskList) {
        super("#task-list-template");
        this.taskList = taskList;
    }
    setup() {
        this.element.querySelector("h2").textContent = `${this.taskList}`;
        this.element.querySelector("ul").id = `${this.taskList}`;
    }
}
//# sourceMappingURL=TaskList.js.map