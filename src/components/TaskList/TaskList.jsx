import React from "react";
import TodoCard from "../TodoCard";
import styles from "./TaskList.module.css";
const TaskList = ({ list }) => {
  const listElem = list.map((item) => <TodoCard key={item.id} {...item} />);

  return <ul className={styles.list}>{listElem}</ul>;
};

export default TaskList;
