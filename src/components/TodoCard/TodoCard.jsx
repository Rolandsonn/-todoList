import React, { useState } from "react";
import styles from "./TodoCard.module.css";
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
      <div>
        <input
          type="text"
          name="edit"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <button onClick={editHandler}>save</button>
        <button onClick={() => handleSelectCurrent(null)}>cancel</button>
      </div>
    );
  }

  return (
    <>
      <li className={styles.card}>
        <p>{title}</p>
        <button onClick={() => handleDelete(id)}>Delete</button>
        <button onClick={() => handleSelectCurrent(id)}>Edit</button>
        <button onClick={() => handleDone(id)}>Done</button>
      </li>
    </>
  );
};

export default TodoCard;
