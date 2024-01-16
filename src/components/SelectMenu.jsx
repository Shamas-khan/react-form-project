import React from "react";

const SelectMenu = ({
  label,
  id,
  name,
  value,
  onchange,
  error,
  byDefault,
  options,
}) => {
  return (
    <>
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select id={id} name={name} value={value} onChange={onchange}>
        {byDefault &&  <option hidden> Select Category </option> }
         {options.map((option)=> <option key={option} value={option}>{option}</option>)}         
        </select>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};

export default SelectMenu;
