import React, { useState } from "react";
import { useContext } from "react";
import TaskContext from "../context/TaskContex";

function TaskCreate({ task }) {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDetail, setTaskDetail] = useState(task ? task.taskDetail : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, taskDetail);
    setTitle("");
    setTaskDetail("");
  };

  const formClassName = "form-area";
  return (
    <div className={formClassName}>
      <form>
        <h3>Please Add a Task</h3>
        <label>Task Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title.."
        />
        <label>Task Details</label>
        <textarea
          rows="3"
          cols="2"
          placeholder="Enter task detail.."
          value={taskDetail}
          onChange={(e) => setTaskDetail(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit} type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
