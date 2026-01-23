const taskListData = ["Todo", "Working", "Done"] as const;
type TaskListType = typeof taskListData[number];

export { type TaskListType, taskListData };