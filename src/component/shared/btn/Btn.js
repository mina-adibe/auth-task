import React from "react";
import Button from "@material-ui/core/Button";

const Btn = ({ name, type }) => {
  return (
    <div>
      <Button variant="contained" color="primary" type={type}>
        {name}
      </Button>
    </div>
  );
};

export default Btn;
