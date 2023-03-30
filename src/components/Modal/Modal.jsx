import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input";
import styles from "./Modal.module.css";
const Modal = ({ handleClickAdd, showModal, addFunction, addTasks }) => {
  const [text, setText] = useState("");

  const handleChangetext = (textInput) => {
    setText(textInput);
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        <Input
          handleChange={addFunction}
          name="add"
          placeholder="Добавить таск"
        />

        <div className={styles.btnClose}>
          <Button handleClick={showModal}>X</Button>
        </div>

        <Button handleClick={addTasks}>Добавить таск</Button>
      </div>
    </div>
  );
};

export default Modal;
