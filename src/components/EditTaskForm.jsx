import { useState } from "react";

const EditTaskForm = ({ task, onEditTask }) => {
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title) return;

    const newTask = {
      title,
      isDone: task.isDone,
      priority: Number(priority),
      added: task.added,
    };
    onEditTask(newTask);

    console.log(newTask);
  }

  return (
    <div className="modal fade" id={"editTask" + task.added} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Task
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder="Edit Task"
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="form-floating mb-3">
                <select className="form-select" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option value="1">High</option>
                  <option value="2">Medium</option>
                  <option value="3">Low</option>
                </select>
                <label htmlFor="priority">Priority</label>
              </div>
            </div>
            <div className="modal-footer">
              <span className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </span>
              <button className="btn btn-primary" data-bs-dismiss="modal">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTaskForm;
