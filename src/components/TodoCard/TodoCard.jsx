import React from "react";
import styles from "./TodoCard.module.css";
const TodoCard = ({ title }) => {
  return (
    <>
      <li className={styles.card}>
        <p>{title}</p>
      </li>
    </>
  );
};

export default TodoCard;
