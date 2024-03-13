import { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(1);
  const [buttonDisable, setButtonDisable] = useState(true);

  function handleSubmit(e) {
    const now = new Date();
    e.preventDefault();
    if (!title) return;

    const newTask = {
      title,
      isDone: false,
      priority: Number(priority),
      added: now.getTime(),
    };
    onAddTask(newTask);

    setTitle("");
    setPriority(1);
    setButtonDisable(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Add Task *"
          value={title}
          onChange={(e) => {
            setButtonDisable(e.target.value === "");
            setTitle(e.target.value);
          }}
        />

        <label htmlFor="title">
          Add Task <span className="text-danger">*</span>
        </label>
      </div>
      <div className="form-floating mb-3">
        <select className="form-select" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
        <label htmlFor="priority">Priority</label>
      </div>
      <div>
        <button className="btn btn-primary" disabled={buttonDisable}>
          Tambahkan <i className="bi bi-plus"></i>
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
