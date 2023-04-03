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
  const [isExists, setIsExists] = useState(false);

  //* Func delete Task
  const handleDelete = (id) => {
    const deleted = tasks.filter((item) => item.id !== id);

    setTasks([...deleted]);
  };

  //* Func edit Task
  const handleEdit = (editedTodo) => {
    const editedList = tasks.map((item) => {
      if (item.id === editedTodo.id) {
        return editedTodo;
      }
      return item;
    });

    setTasks(editedList);
    console.log("click edit");
  };

  //* Func done Task
  const handleDone = (id) => {
    // const currentIndex = tasks.findIndex((task) => task.id === id);
    tasks.map((task) => {
      if (task.id === id) {
        return (task.completed = !task.completed);
      }
      return task;
    });
    setTasks([...tasks]);
  };

  const showModal = () => setShow(!show);

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const FILTERED = filter.toLowerCase();

  const filteredTasks = tasks.filter(({ title }) =>
    title.toLowerCase().includes(FILTERED)
  );

  const handleChangeCheck = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    tasks.forEach((task) => {
      if (task.title === newtask) {
        alert(`This task ${newtask} has already been added`);
        setIsExists(!isExists);
      }
    });

    const newTask = {
      id: shortid.generate(),
      title: newtask,
      completed: false,
    };

    console.log(newTask);

    !isExists && setTasks((prevState) => [...prevState, newTask]);
    showModal();
  };

  useEffect(() => {
    const myLocalList = JSON.parse(localStorage.getItem("tasks"));
    if (myLocalList.length !== 0) {
      setTasks(myLocalList);
    }
    setTasks(myLocalList);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //! Func Delete All Tasks

  const handleDeleteAllTasks = () => {
    setTasks([]);
    localStorage.clear();
  };

  return (
    <>
      <div className="App">
        {show && (
          <Modal
            handleChangeCheck={handleChangeCheck}
            handleAdd={handleAddTask}
            showModal={showModal}
          />
        )}
        <div className="btnOpen">
          <Button type={"open"} handleClick={showModal}>
            Open Modal
          </Button>
        </div>

        {tasks.length > 0 && (
          <Input placeholder="Filter" handleChange={changeFilter} />
        )}

        {tasks.length !== 0 ? (
          <Button type={"deleteAll"} handleClick={handleDeleteAllTasks}>
            Clear
          </Button>
        ) : (
          ""
        )}

        <TaskList
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleDone={handleDone}
          list={filteredTasks}
        />
      </div>
    </>
  );
}

export default App;
