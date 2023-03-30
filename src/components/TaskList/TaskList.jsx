import React from "react";
import TodoCard from "../TodoCard";

const TaskList = ({ list }) => {
  const listElem = list.map((item) => <TodoCard key={item.id} {...item} />);

  return <ul>{listElem}</ul>;
};

export default TaskList;
