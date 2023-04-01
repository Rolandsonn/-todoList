import React, { useState } from "react";
import TodoCard from "../TodoCard";
import styles from "./TaskList.module.css";
const TaskList = ({ list, handleDelete, handleEdit, handleDone }) => {
  const [currentEdit, setCurrentEdit] = useState();
  const listElem = list.map((item) => (
    <TodoCard
      key={item.id}
      {...item}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      handleDone={handleDone}
      handleSelectCurrent={setCurrentEdit}
      iEdit={item.id === currentEdit}
    />
  ));

  return <ul className={styles.list}>{listElem}</ul>;
};

export default TaskList;
