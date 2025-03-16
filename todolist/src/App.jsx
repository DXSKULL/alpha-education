import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./assets/css/style.css";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = ["Все", "Завершенные", "Не завершенные"];

  useEffect(() => {
    console.log("Mount")
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      // Чтобы не перезаписывать localStorage пустыми данными
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  function toggleTaskCompletion(title) {
    const updatedTasks = tasks.map((task) => {
      if (task.name === title) {
        return {
          name: task.name,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function filterTasks(activeCategoryIndex) {
    if (activeCategoryIndex === 2) {
      return tasks.filter((task) => !task.isCompleted);
    } else if (activeCategoryIndex === 1) {
      return tasks.filter((task) => task.isCompleted);
    } else {
      return tasks;
    }
  }

  function addTask(taskName) {
    const newTask = {
      name: taskName,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(name) {
    const updatedTasks = tasks.filter((task) => task.name !== name);
    setTasks(updatedTasks);
  }

  return (
    <div className="app">
      <div className="app-main">
        <Header />
        <div className="app-dashboard">
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <ToDoList
            toggleTaskCompletion={toggleTaskCompletion}
            tasks={filterTasks(activeCategory)}
            deleteTask={deleteTask}
          />
        </div>
        <Footer addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
