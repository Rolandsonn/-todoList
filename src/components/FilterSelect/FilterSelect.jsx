import React, { useState } from "react";
import Select from "react-select";
const FilterSelect = ({ data, onSelected }) => {
  const handleChange = (e) => {
    onSelected(e.target.value);
  };

  return (
    <>
      <select multiple={true} defaultValue={data} onChange={handleChange}>
        {data.map((item) => (
          <option key={item.id} value={item}>
            {item.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterSelect;
