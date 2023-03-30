import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.values);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Name"
      />
    </>
  );
};

export default Input;
