import { TaskForm } from "./Component/TaskForm.js";
import { TaskList } from "./Component/TaskList.js";
import { taskListData } from "./Types/TaskListType.js";
import { taskTodosAdmin } from "./Adminer/TaskTodosAdmin.js";
import { TaskItem } from "./Component/TaskItem.js";
new TaskForm();
taskListData.forEach((taskList) => {
    const list = new TaskList(taskList);
    list.mount("#container");
});
taskTodosAdmin.getTasks();
//# sourceMappingURL=index.js.map