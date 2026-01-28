import { TaskForm } from "./Component/TaskForm.js";
import { TaskList } from "./Component/TaskList.js";
import { taskListData } from "./Types/TaskListType.js";

new TaskForm();
taskListData.forEach((taskList) => {
  const list = new TaskList(taskList);
  list.mount("#container");
});
