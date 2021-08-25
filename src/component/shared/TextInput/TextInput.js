import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = ({
  placeholder,
  id,
  label,
  type,
  name,
  defaultValue,
  onChange,
  value,
  ...props
}) => {
  return (
    <div>
      <TextField
        id={id}
        label={label}
        type={type}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default TextInput;
