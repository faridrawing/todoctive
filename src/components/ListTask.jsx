import { useState } from "react";
import ClearTasks from "./ClearTasks";
import ListOptions from "./ListOptions";
import Task from "./Task";

const ListTask = ({ tasks, onToggleTask, onDeleteTask, onClearTasks, onEditTask }) => {
  const [filterBy, setFilterBy] = useState("default");
  const [sortBy, setSortBy] = useState("time");
  const [direction, setDirection] = useState("asc");

  if (tasks.length === 0)
    return (
      <div className="mt-3">
        <div className="alert alert-primary" role="alert">
          <i className="bi bi-info-circle"></i> Kamu belum menambahkan task apapun!
        </div>
      </div>
    );

  let manipulatedTasks = tasks;
  switch (filterBy) {
    case "finished":
      manipulatedTasks = tasks.filter((task) => task.isDone);
      break;
    case "unfinished":
      manipulatedTasks = tasks.filter((task) => task.isDone === false);
      break;
    default:
      manipulatedTasks = tasks;
  }

  let manipulatedTasks2;
  switch (sortBy) {
    case "priority":
      if (direction === "desc") manipulatedTasks2 = manipulatedTasks.sort((a, b) => b.priority - a.priority);
      else manipulatedTasks2 = manipulatedTasks.sort((a, b) => a.priority - b.priority);
      break;
    case "name":
      if (direction === "desc") manipulatedTasks2 = manipulatedTasks.sort((a, b) => b.title.localeCompare(a.title));
      else manipulatedTasks2 = manipulatedTasks.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      if (direction === "desc") manipulatedTasks2 = manipulatedTasks.sort((a, b) => b.added - a.added);
      else manipulatedTasks2 = manipulatedTasks.sort((a, b) => a.added - b.added);
  }

  let ifEmpty = <></>;

  if (manipulatedTasks2.length === 0) {
    if (filterBy === "finished") {
      ifEmpty = (
        <div className="mt-3">
          <div className="alert alert-warning" role="alert">
            <i className="bi bi-exclamation-triangle"></i> Kamu belum menyelesaikan task apapun!
          </div>
        </div>
      );
    } else if (filterBy === "unfinished") {
      // ifEmpty = "produktif";
      ifEmpty = (
        <div className="mt-3">
          <div className="alert alert-success" role="alert">
            <i className="bi bi-check-circle"></i> Kamu sudah menyelesaikan semua task!
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <h4 className="text-center my-3">List Task</h4>

      <div className="accordion mb-3" id="accordionOptions">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOptions">
            <span
              className="accordion-button collapsed fw-normal"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOptions"
              aria-expanded="true"
              aria-controls="collapseOptions"
              style={{ backgroundColor: "transparent", paddingBlock: ".8rem" }}
            >
              Options
            </span>
          </h2>
          <div id="collapseOptions" className="accordion-collapse collapse" aria-labelledby="headingOptions" data-bs-parent="#accordionOptions">
            <div className="accordion-body">
              <ListOptions setFilterBy={setFilterBy} setSortBy={setSortBy} setDirection={setDirection} onClearTasks={onClearTasks} />
            </div>
          </div>
        </div>
      </div>
      {ifEmpty}
      <ul className="list-group">
        {manipulatedTasks2.map((task) => (
          <Task key={task.added} task={task} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
