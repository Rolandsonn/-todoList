import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal";
import TaskList from "./components/TaskList";
function App() {
  const [show, setShow] = useState(false);
  const [newtask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "coding",
      completed: false,
    },
    {
      id: 2,
      title: "eat",
      completed: false,
    },
    {
      id: 1,
      title: "sleep",
      completed: false,
    },
    {
      id: 1,
      title: "Coding",
      completed: false,
    },
  ]);

  const handleDelete = (id) => {
    const deleted = tasks.filter((item) => item.id !== id);

    setTasks([...deleted]);
  };

  const handleEdit = (editedTodo) => {
    tasks.map((item) => {
      if (item.id === editedTodo.id) {
        return editedTodo;
      }
      return item;
    });
  };

  const handleDone = () => {};

  useEffect(() => {
    console.log("Hello World!!!");
  }, []);

  const showModal = () => {
    setShow(true);
  };

  return (
    <>
      <div>
        {show && <Modal />}
        <button onClick={showModal}>Open Modal</button>

        <TaskList
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEdit={handleEdit}
          list={tasks}
        />
      </div>
    </>
  );
}

export default App;
