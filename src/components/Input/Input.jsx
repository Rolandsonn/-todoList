import React, { useState } from "react";
import styles from "./Input.module.css";
const Input = ({ name, textInput, placeholder, handleChange }) => {
  return (
    <>
      <input
        className={styles.Input}
        type={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
