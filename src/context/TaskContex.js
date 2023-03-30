import { createContext, useEffect, useState } from "react";

const TaskContext = createContext();

function Provider({ children }) {
  const [taskList, setTaskList] = useState([]);
  const [currentStatus, setCurrentStatus] = useState("all");

  useEffect(() => {
    fetchTasks();
  }, []);

  const changeStatus = (status) => {
    setCurrentStatus(status);
  };

  const createTask = (title, taskDetail) => {
    const newTasksList = [
      ...taskList,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDetail: taskDetail.trim(),
        status: "pending",
      },
    ];

    localStorage.setItem("tasks", JSON.stringify(newTasksList));
    setTaskList(newTasksList);
  };

  const onDelete = (id) => {
    const newTasksList = taskList.filter((item) => item.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasksList));
    setTaskList(newTasksList);
  };

  const onUpdate = (id, title, taskDetail, status) => {
    const newTasksList = taskList.map((item) => {
      if (item.id === id) {
        return { id, title, taskDetail, status };
      }
      return item;
    });
    localStorage.setItem("tasks", JSON.stringify(newTasksList));
    setTaskList(newTasksList);
  };

  const onStatusUpdate = (task) => {
    const newTasksList = [...taskList];
    const findTask = newTasksList.find((item) => item.id === task.id);
    findTask.status = findTask.status === "pending" ? "completed" : "pending";
    localStorage.setItem("tasks", JSON.stringify(newTasksList));
    setTaskList(newTasksList);
  };

  const fetchTasks = () => {
    let tasks;
    if (localStorage.getItem("tasks")) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    setTaskList(tasks);
  };

  const sharedValuesAndMethods = {
    taskList,
    createTask,
    onDelete,
    onUpdate,
    fetchTasks,
    onStatusUpdate,
    changeStatus,
    currentStatus,
  };

  return (
    <TaskContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TaskContext.Provider>
  );
}

export { Provider };
export default TaskContext;
