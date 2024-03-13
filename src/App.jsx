import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import ListTask from "./components/ListTask";
import Footer from "./components/Footer";

const App = () => {
  const [tasks, setTasks] = useState([
    { title: "Mengerjakan tugas", isDone: false, priority: 1, added: 1710243013352 },
    { title: "Mandi pagi", isDone: true, priority: 2, added: 1710243013353 },
    { title: "Berolahraga", isDone: false, priority: 3, added: 1710243013354 },
    { title: "Membaca buku", isDone: false, priority: 1, added: 1710243013355 },
    { title: "Menulis jurnal", isDone: true, priority: 2, added: 1710243013356 },
    { title: "Mengatur agenda", isDone: true, priority: 3, added: 1710243013357 },
    { title: "Belajar musik", isDone: false, priority: 1, added: 1710243013358 },
    { title: "Menonton film", isDone: false, priority: 2, added: 1710243013359 },
    { title: "Membuat makanan", isDone: false, priority: 3, added: 1710243013360 },
    { title: "Membuat daftar belanja", isDone: false, priority: 1, added: 1710243013361 },
  ]);

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
