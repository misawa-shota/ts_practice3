import { TaskForm } from "./Component/TaskForm.js";
import { TaskList } from "./Component/TaskList.js";
import { taskListData } from "./Types/TaskListType.js";
import { sessionStorageInstance } from "./SessionStorage/SessionStorage.js";

new TaskForm();
taskListData.forEach((taskList) => {
  const list = new TaskList(taskList);
  list.mount("#container");
});

const taskItem = sessionStorageInstance.getTask("Todo");