import React, { useState } from "react";

const Input = ({ name, textInput, placeholder, handleChange }) => {
  return (
    <>
      <input type={name} onChange={handleChange} placeholder={placeholder} />
    </>
  );
};

export default Input;
