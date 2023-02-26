import React from "react";
import { Box, TextField } from "@mui/material";

const FileInput = ({ name, value, label, onChange, error }) => {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    >
      <div>
        <TextField
          id="image_uploads"
          accept="image/*"
          type="file"
          name={name}
          value={value}
          label={label}
          onChange={onChange}
        />
      </div>

      {error && (
        <div id="validationServer03Feedback" className="invalid-feedback">
          {error}
        </div>
      )}
    </Box>
  );
};
export default FileInput;
