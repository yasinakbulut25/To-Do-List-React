import React from "react";
import TaskItem from "./TaskItem";
import { useContext } from "react";
import TaskContext from "../context/TaskContex";
function TaskList() {
  const { taskList, currentStatus, changeStatus } = useContext(TaskContext);

  const filteredList = taskList.filter(
    (item) => item.status === currentStatus || currentStatus === "all"
  );

  return (
    <div className="tasks">
      <div className="filter">
        <button
          onClick={() => changeStatus("all")}
          type="button"
          className={
            currentStatus === "all" ? "filter-btn active" : "filter-btn"
          }
        >
          All
        </button>
        <button
          onClick={() => changeStatus("pending")}
          type="button"
          className={
            currentStatus === "pending" ? "filter-btn active" : "filter-btn"
          }
        >
          Pending
        </button>
        <button
          onClick={() => changeStatus("completed")}
          type="button"
          className={
            currentStatus === "completed" ? "filter-btn active" : "filter-btn"
          }
        >
          Completed
        </button>
      </div>
      <h3 className="title">{currentStatus} Task List</h3>
      <div className="task-list">
        {filteredList.length > 0 ? (
          filteredList.map((task, index) =>
            currentStatus === task.status || currentStatus === "all" ? (
              <TaskItem key={index} task={task} />
            ) : null
          )
        ) : (
          <p className="empty-message">You have no {currentStatus} task yet</p>
        )}
      </div>
    </div>
  );
}

export default TaskList;
