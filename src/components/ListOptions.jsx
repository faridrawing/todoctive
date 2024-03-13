import { useState } from "react";
import ClearTasks from "./ClearTasks";

const ListOptions = ({ setFilterBy, setSortBy, setDirection, onClearTasks }) => {
  const [filter, setFilter] = useState("default");
  const [sortBy, setSort] = useState("time");
  const [direction, setDir] = useState("asc");

  const resetOptions = () => {
    setFilter("default");
    setSort("time");
    setDir("asc");
    setFilterBy("default");
    setSortBy("time");
    setDirection("asc");
  };

  return (
    <>
      <div>
        <div className="btn-group btn-group-sm me-3 mb-3" role="group">
          <input
            type="radio"
            className="btn-check"
            name="filter"
            id="defaultFilter"
            checked={filter === "default"}
            onChange={() => {
              setFilter("default");
              setFilterBy("default");
            }}
          />
          <label className="btn btn-outline-primary d-flex flex-nowrap" htmlFor="defaultFilter">
            <i className="bi bi-filter"></i> Default
          </label>
          <input
            type="radio"
            className="btn-check"
            name="filter"
            id="finishedFilter"
            checked={filter === "finished"}
            onChange={() => {
              setFilter("finished");
              setFilterBy("finished");
            }}
          />
          <label className="btn btn-outline-primary d-flex flex-nowrap" htmlFor="finishedFilter">
            <i className="bi bi-filter"></i> Finished
          </label>
          <input
            type="radio"
            className="btn-check"
            name="filter"
            id="unfinishedFilter"
            checked={filter === "unfinished"}
            onChange={() => {
              setFilter("unfinished");
              setFilterBy("unfinished");
            }}
          />
          <label className="btn btn-outline-primary d-flex flex-nowrap" htmlFor="unfinishedFilter">
            <i className="bi bi-filter"></i> Unfinished
          </label>
        </div>

        <div className="btn-group btn-group-sm me-3 mb-3" role="group">
          <input
            type="radio"
            className="btn-check"
            name="sortBy"
            id="timeSort"
            checked={sortBy === "time"}
            onChange={() => {
              setSort("time");
              setSortBy("time");
            }}
          />
          <label className="btn btn-outline-primary d-flex flex-nowrap" htmlFor="timeSort">
            <i className="bi bi-filter-left"></i> Time
          </label>
          <input
            type="radio"
            className="btn-check"
            name="sortBy"
            id="nameSort"
            checked={sortBy === "name"}
            onChange={() => {
              setSort("name");
              setSortBy("name");
            }}
          />
          <label className="btn btn-outline-primary d-flex flex-nowrap" htmlFor="nameSort">
            <i className="bi bi-filter-left"></i> Name
          </label>
          <input
            type="radio"
            className="btn-check"
            name="sortBy"
            id="prioritySort"
            checked={sortBy === "priority"}
            onChange={() => {
              setSort("priority");
              setSortBy("priority");
            }}
          />
          <label className="btn btn-outline-primary d-flex flex-nowrap" htmlFor="prioritySort">
            <i className="bi bi-filter-left"></i> Priority
          </label>
        </div>

        <div className="btn-group btn-group-sm me-3 mb-3" role="group">
          <input
            type="radio"
            className="btn-check"
            name="direction"
            id="directionAsc"
            checked={direction === "asc"}
            onChange={() => {
              setDir("asc");
              setDirection("asc");
            }}
          />
          <label className="btn btn-outline-primary" htmlFor="directionAsc">
            <i className="bi bi-arrow-up"></i>
          </label>
          <input
            type="radio"
            className="btn-check"
            name="direction"
            id="directionDesc"
            checked={direction === "desc"}
            onChange={() => {
              setDir("desc");
              setDirection("desc");
            }}
          />
          <label className="btn btn-outline-primary" htmlFor="directionDesc">
            <i className="bi bi-arrow-down"></i>
          </label>
        </div>

        {/* Tombol Reset */}
        <button className="btn btn-secondary btn-sm mb-3" onClick={resetOptions}>
          <i className="bi bi-arrow-clockwise"></i> Reset
        </button>
      </div>
      <ClearTasks onClearTasks={onClearTasks} />
      <div className="modal fade" id="confirmClearTasks" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Confirm
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Yakin?</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  onClearTasks();
                  resetOptions();
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListOptions;
