import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, handleClick, type }) => {
  return (
    <button className={styles[type]} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
