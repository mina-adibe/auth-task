import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { LoginRequest } from "../../store/actions/auth";
import PropTypes from "prop-types";

const Login = ({ LoginRequest }) => {
  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be valid E-mail").required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      LoginRequest(values);
    },
  });

  return (
    <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          name="email"
          label="email"
          id="email"
          placeholder="enter your mail"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <div>{formik.errors.email}</div>}

        <TextField
          fullWidth
          name="password"
          label="password"
          type="password"
          id="password"
          placeholder="enter your password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <div>{formik.errors.password}</div>}

        <Button variant="contained" color="primary" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  LoginRequest: LoginRequest,
};

Login.propTypes = {
  LoginRequest: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
