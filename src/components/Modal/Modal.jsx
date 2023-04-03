import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input";
import styles from "./Modal.module.css";
const Modal = ({ handleClickAdd, showModal, handleAdd, handleChangeCheck }) => {
  return (
    <>
      <div className={styles.modalWrapper}></div>
      <div className={styles.modalContent}>
        <Input
          handleChange={handleChangeCheck}
          name="add"
          placeholder="Add task... "
        />

        <div className={styles.btnClose}>
          <Button type={"closeBtn"} handleClick={showModal}>
            X
          </Button>
        </div>

        <Button type={"addBtn"} handleClick={handleAdd}>
          Add task
        </Button>
      </div>
    </>
  );
};

export default Modal;
