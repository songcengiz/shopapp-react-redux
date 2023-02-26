import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  helperText,
  variant,
}) => {
  return (
    <Box
   
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
      }}
      autoComplete="off"
    >
      <TextField
        name={name}
        value={value}
        placeholder={placeholder}
        label={label}
        error={error}
        helperText={helperText}
        variant={variant}
        onChange={onChange}
        fullWidth
        autoFocus
      />
    </Box>
  );
};
export default TextInput;
