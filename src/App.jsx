import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import ListTask from "./components/ListTask";
import Footer from "./components/Footer";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("tasksList"));
    if (savedItems) {
      setTasks(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  }, [tasks]);

  function handleDeleteTask(added) {
    setTasks(tasks.filter((task) => task.added !== added));
  }

  function handleAddTask(task) {
    setTasks([...tasks, task]);
  }

  function handleToggleTask(added) {
    setTasks(tasks.map((task) => (task.added === added ? { ...task, isDone: !task.isDone } : task)));
  }

  function handleClearTasks() {
    setTasks([]);
  }

  function handleEditTask(editedTask) {
    setTasks(tasks.map((task) => (task.added === editedTask.added ? editedTask : task)));
  }

  return (
    <>
      <div className="container my-4 mb-5" style={{ maxWidth: "45rem" }}>
        <Header />
        <AddTaskForm onAddTask={handleAddTask} />
        <ListTask tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} onClearTasks={handleClearTasks} onEditTask={handleEditTask} />
      </div>
      {tasks.length > 0 && <Footer tasks={tasks} />}
    </>
  );
};

export default App;
