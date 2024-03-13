import EditTaskForm from "./EditTaskForm";
const Task = ({ task, onToggleTask, onDeleteTask, onEditTask }) => {
  let Priority = <></>;
  if (task.priority === 1) {
    Priority = (
      <span className="priority-high">
        <i className="bi bi-battery-full"></i>
      </span>
    );
  } else if (task.priority === 2) {
    Priority = (
      <span className="priority-medium">
        <i className="bi bi-battery-half"></i>
      </span>
    );
  } else {
    Priority = (
      <span className="priority-low">
        <i className="bi bi-battery"></i>
      </span>
    );
  }
  return (
    <li
      key={task.added}
      onClick={(e) => {
        if (e.target.matches(".task-list, .task-title, .priority-level")) {
          onToggleTask(task.added);
        }
      }}
      className="list-group-item d-flex justify-content-between align-items-center task-list"
      style={{ cursor: "pointer", userSelect: "none", textDecoration: task.isDone ? "line-through" : "none", color: task.isDone ? "#9FA5AA" : "#212529", textDecorationColor: task.isDone ? "#DC3545" : "#C9CCCF" }}
    >
      <span className="task-title">{task.title}</span>
      <span>
        <acronym title={task.priority === 1 ? "Priority High" : task.priority === 2 ? "Priority Medium" : "Priority Low"}>
          <span>{Priority}</span>
        </acronym>
        <button className="btn btn-primary btn-sm mx-2" data-bs-toggle="modal" data-bs-target={"#editTask" + task.added}>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => onDeleteTask(task.added)}>
          <i className="bi bi-trash"></i>
        </button>
      </span>
      <EditTaskForm task={task} onEditTask={onEditTask} />
    </li>
  );
};

export default Task;
