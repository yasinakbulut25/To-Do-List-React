import React, { useState } from "react";

export default function TaskUpdate({ showEdit, task, handleOnEdit, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDetail, setTaskDetail] = useState(task ? task.taskDetail : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(task.id, title, taskDetail, task.status);
  };

  const closePopup = (e) => {
    if (e.target.className === "form-area edit") {
      setTitle(task.title);
      setTaskDetail(task.taskDetail);
      handleOnEdit();
    }
  };

  const formClassName = showEdit ? "form-area edit" : "form-area edit hidden";
  return (
    <div className={formClassName} onClick={closePopup}>
      <form>
        <h3>Please Edit Task</h3>
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
          Edit Task
        </button>
      </form>
    </div>
  );
}
