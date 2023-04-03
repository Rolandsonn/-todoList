import React, { useState } from "react";
import styles from "./TodoCard.module.css";
import Button from "../Button/Button";
const TodoCard = ({
  title,
  handleDelete,
  handleEdit,
  handleDone,
  id,
  completed,
  handleSelectCurrent,
  iEdit,
}) => {
  const [newTitle, setNewTitle] = useState(title);

  const editHandler = () => {
    handleEdit({
      id,
      title: newTitle,
      completed,
    });
    handleSelectCurrent(null);
  };

  if (iEdit) {
    return (
      <div className={styles.card}>
        <input
          className={styles.input}
          type="text"
          name="edit"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <Button type={"save"} handleClick={editHandler}>
          save
        </Button>
        <Button type={"cancel"} handleClick={handleSelectCurrent}>
          cancel
        </Button>
        {/* <button onClick={editHandler}>save</button> */}
        {/* <button onClick={() => handleSelectCurrent(null)}>cancel</button> */}
      </div>
    );
  }

  return (
    <>
      <li className={styles.card}>
        <input
          className={styles.checkbox}
          type="checkbox"
          onClick={() => handleDone(id)}
        />
        <p className={completed ? styles.text : ""}>{title}</p>
        <Button type={"edit"} handleClick={() => handleSelectCurrent(id)}>
          Edit
        </Button>
        <Button type={"delete"} handleClick={() => handleDelete(id)}>
          Delete
        </Button>
      </li>
    </>
  );
};

export default TodoCard;
