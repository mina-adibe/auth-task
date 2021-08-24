import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { ResetPassRequest } from "../../store/actions/auth";
import PropTypes from "prop-types";

const ResetPassword = ({ ResetPassRequest }) => {
  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      token: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be valid E-mail").required("Required"),
      password: Yup.string().required("Required"),
      token: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      ResetPassRequest(values);
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
        <TextField
          fullWidth
          name="token"
          label="token"
          id="token"
          placeholder="Enter token Code          "
          onChange={formik.handleChange}
          value={formik.values.token}
        />
        {formik.errors.token && <div>{formik.errors.token}</div>}

        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  ResetPassRequest: ResetPassRequest,
};

ResetPassword.propTypes = {
  ResetPassRequest: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ResetPassword);
