import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import TaskList from "./components/TaskList";

import shortid from "shortid";

function App() {
  const [show, setShow] = useState(false);
  const [newtask, setNewTask] = useState("");
  const [filter, setFilter] = useState("");
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
      id: 3,
      title: "sleep",
      completed: false,
    },
    {
      id: 4,
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

  const showModal = () => setShow(!show);

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const FILTERED = filter.toLowerCase();

  const filteredTasks = tasks.filter(({ title }) =>
    title.toLowerCase().includes(FILTERED)
  );

  const addNewText = (event) => {
    setNewTask(event.target.value);
  };

  const addTasks = () => {
    const newTask = {
      id: shortid.generate(),
      title: newtask,
      completed: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
  };

  return (
    <>
      <div className="App">
        {show && (
          <Modal
            addTasks={addTasks}
            addFunction={addNewText}
            showModal={showModal}
          />
        )}
        <div className="btnOpen">
          <Button handleClick={showModal}>Открыть модалку</Button>
        </div>

        <Input placeholder="Filter" handleChange={changeFilter} />

        <TaskList
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEdit={handleEdit}
          list={filteredTasks}
        />
      </div>
    </>
  );
}

export default App;
