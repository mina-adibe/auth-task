import React from "react";
import Button from "@material-ui/core/Button";

const Btn = ({ children, type, ...props }) => {
  return (
    <div>
      <Button variant="contained" color="primary" type={type} {...props}>
        {children}
      </Button>
    </div>
  );
};

export default Btn;
