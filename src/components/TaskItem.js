import React, { useState } from "react";
import { useContext } from "react";
import TaskContext from "../context/TaskContex";
import TaskUpdate from "./TaskUpdate";
function TaskItem({ task }) {
  const { onDelete, onUpdate, onStatusUpdate } = useContext(TaskContext);

  const [showEdit, setShowEdit] = useState(false);
  const handleOnDelete = () => {
    onDelete(task.id);
  };

  const handleOnEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleUpdate = (id, title, taskDetail, status) => {
    setShowEdit(false);
    onUpdate(id, title, taskDetail, status);
  };
  return (
    <>
      <TaskUpdate
        showEdit={showEdit}
        task={task}
        handleOnEdit={handleOnEdit}
        onUpdate={handleUpdate}
      />
      <div
        className={
          task.status === "completed" ? "task-box completed" : "task-box"
        }
      >
        <div
          onClick={() => onStatusUpdate(task)}
          className={
            task.status === "completed"
              ? "task-completed completed"
              : "task-completed"
          }
        >
          <i className="bi bi-check"></i>
        </div>
        <p className="task-id">
          <span>#</span>
          {task.id}
        </p>
        <label className="task-label">Task Title</label>
        <p className="task-text">{task.title}</p>
        <label className="task-label">Task Detail</label>
        <p className="task-text">{task.taskDetail}</p>

        <div className="task-buttons">
          <button onClick={handleOnDelete} className="delete-btn">
            Delete
          </button>
          <button onClick={handleOnEdit} className="edit-btn">
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
