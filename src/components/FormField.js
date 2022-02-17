import React from "react";

const FormField = (props) => {
  const { label, type, name, value, onChange, placeholder } = props;
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
};

export default FormField;
