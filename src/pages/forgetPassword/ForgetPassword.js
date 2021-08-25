import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ForgetPassRequest } from "../../store/actions/auth";

const ForgetPassword = ({ ForgetPassRequest }) => {
  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      ForgetPassRequest(values);
    },
  });

  return (
    <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
      <h2>Forget Password</h2>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          id="email"
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <div>{formik.errors.email}</div>}
        <Button variant="contained" color="primary" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};
const mapDispatchToProps = {
  ForgetPassRequest: ForgetPassRequest,
};

ForgetPassword.propTypes = {
  ForgetPassRequest: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(ForgetPassword);
