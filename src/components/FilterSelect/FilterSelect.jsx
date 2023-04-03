import React from "react";
import Select from "react-select";
const FilterSelect = ({ data }) => {
  const handleChange = (selectedOption) => {
    console.log(selectedOption);
  };

  const dataelem = data.map((item) => <div key={item.id}>{item.title}</div>);

  return (
    <>
      <Select options={dataelem} onChange={handleChange} />
    </>
  );
};

export default FilterSelect;
