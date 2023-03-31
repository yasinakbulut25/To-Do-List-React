import React, { useState } from "react";
import { useContext } from "react";
import TaskContext from "../context/TaskContex";

function TaskCreate({ task }) {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDetail, setTaskDetail] = useState(task ? task.taskDetail : "");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && taskDetail) {
      createTask(title, taskDetail);
      setTitle("");
      setTaskDetail("");
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };

  const formClassName = "form-area";
  return (
    <div className={formClassName}>
      <form>
        <h3>Please Add a Task</h3>
        {
          errorMessage && <span className="empty-message fields">Please fill in all fields </span>
        }  
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
